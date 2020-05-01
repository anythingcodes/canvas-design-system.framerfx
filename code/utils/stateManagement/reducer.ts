import { ManagedState, ManagedStateActionType, ManagedStateActions } from "./types"

export const initialState: ManagedState = {
  subscriptions: {},
  values: {},
}

export default function(state: ManagedState = initialState, action: ManagedStateActions[keyof ManagedStateActions]) {
  const nextState = {
    ...state,
  }

  switch (action.type) {
    case ManagedStateActionType.REGISTER_SUBSCRIPTION:
      if (!nextState.subscriptions.hasOwnProperty(action.valueId)) {
        nextState.subscriptions[action.valueId] = []
      }
      if (nextState.subscriptions[action.valueId].indexOf(action.subscriberId) === -1) {
        nextState.subscriptions[action.valueId].push(action.subscriberId)
      }
      // Initialise value
      if (!nextState.values.hasOwnProperty(action.valueId)) {
        nextState.values[action.valueId] = action.initialValue
      }
      break
    case ManagedStateActionType.UNREGISTER_SUBSCRIPTION:
      nextState.subscriptions = Object.keys(nextState.subscriptions).reduce((acc, valueId) => {
        // Filter this subscriber out of the list
        const subscribers = nextState.subscriptions[valueId].filter(
          subscriberId => subscriberId !== action.subscriberId
        )

        // If there's still subscribers, set the list of subscribers again or remove the value from the global state
        if (subscribers.length > 0) {
          acc[valueId] = subscribers
        } else {
          delete nextState.values[valueId]
        }
        return acc
      }, {})
      break
    case ManagedStateActionType.SET_VALUE:
      nextState.values[action.valueId] = action.value
      break
  }

  return nextState
}
