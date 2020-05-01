import * as React from "react"
import { useDispatch, useGlobal } from "reactn"
import reducer from "./reducer"
import { GlobalState } from "./types"
import { registerSubscription, unregisterSubscription, setValue } from "./actions"

/**
 * This higher order component allows any component to have a managed state value.
 * As it supports local/global state, it is also possible to switch a component
 * from a locally managed state to globally managed and the value be retained.
 * It relies on property controls that are set by the UseGlobalStatePropertyControl.
 *
 * @param Component
 * @returns A component that subscribes to a local/global state value
 */
export const withManagedState = (Component): React.SFC<any> => {
  return ({ shouldUseGlobalState, globalStateKey, valuePropName, onChange: originalOnChange, ...props }) => {
    const [globalState] = useGlobal<GlobalState>("managedState")
    const dispatch = useDispatch<GlobalState>(reducer, "managedState")

    const [currentShouldUseGlobalState, setCurrentShouldUseGlobalState] = React.useState(shouldUseGlobalState)
    const [currentGlobalStateKey, setCurrentGlobalStateKey] = React.useState(globalStateKey)

    const valueId = currentShouldUseGlobalState && !!currentGlobalStateKey ? currentGlobalStateKey : props.id
    const localValue = props[valuePropName]
    const currentValue =
      globalState && globalState.values[valueId] !== undefined ? globalState.values[valueId] : localValue

    /**
     * Registers this component as a state subscriber on mount (local & global).
     *
     * @returns A function which cleans up the subscription created on mount.
     */
    React.useEffect(() => {
      dispatch(registerSubscription(props.id, valueId, localValue))
      return () => dispatch(unregisterSubscription(props.id))
    }, [])

    /**
     * Callback which cleans up the old subscription and registers the new one.
     * This can be called in the case of a component moving from local -> global (and vice-versa),
     * or if it's globalStateKey has changed.
     */
    const reRegisterSubscription = React.useCallback(
      (newGlobalStateKey?: string) => {
        /**
         * Unregister this subscriber. We could do this when the new subscription
         * gets registered, but we may support subscribing to multiple values
         * in the future so it makes sense to separate these actions.
         */
        dispatch(unregisterSubscription(props.id))

        /**
         * Register the new subscriber with it's initial value. As the new globalStateKey
         * could be blank, we'll fall back to the component's ID on the canvas
         */
        dispatch(registerSubscription(props.id, newGlobalStateKey || props.id, currentValue))
      },
      [props.id, currentGlobalStateKey]
    )

    /**
     * If the globalStateKey changes this effect ensures the old subscription is cleaned up
     * and the new subscription is initialised, along with setting the new global state key.
     */
    React.useEffect(() => {
      if (globalStateKey !== currentGlobalStateKey) {
        reRegisterSubscription(globalStateKey)
        setCurrentGlobalStateKey(globalStateKey)
      }
    }, [globalStateKey])

    /**
     * If the boolean property indicating whether this component should use global state changes,
     * this effect will clean up the old subscription and register the new one.
     */
    React.useEffect(() => {
      if (shouldUseGlobalState !== currentShouldUseGlobalState) {
        reRegisterSubscription(shouldUseGlobalState && currentGlobalStateKey)
        setCurrentShouldUseGlobalState(shouldUseGlobalState)
      }
    }, [shouldUseGlobalState, currentGlobalStateKey, currentShouldUseGlobalState])

    /**
     * Dispatches an action to the managedState reducer which updates the value.
     */
    const onChange = React.useCallback(
      changedValue => {
        dispatch(setValue(valueId, changedValue))
        if (typeof originalOnChange === 'function') {
          originalOnChange(changedValue)
        }
      },
      [props.id, valueId, originalOnChange]
    )

    /**
     * If the local value changes & doesn't match the managed state value,
     * we should update the managed state value to reflect this.
     *
     * This effect will run if a property control is modified - the property control
     * value should be our single source of truth if it's changed after a component mounts.
     *
     * @NOTE Should we only set the value if the component isn't using a globally managed state?
     */
    React.useEffect(() => {
      if (localValue !== currentValue) {
        onChange(localValue)
      }
    }, [localValue, onChange])

    const updatedProps = {
      ...props,
      [valuePropName]: currentValue,
    }

    return <Component {...updatedProps} onChange={onChange} />
  }
}
