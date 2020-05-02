import { ManagedStateActions, ManagedStateActionType } from "./types"

export const registerSubscription = (
  subscriberId: string,
  valueId: string,
  initialValue: any
): ManagedStateActions[ManagedStateActionType.REGISTER_SUBSCRIPTION] => {
  return {
    type: ManagedStateActionType.REGISTER_SUBSCRIPTION,
    subscriberId,
    valueId,
    initialValue,
  }
}

export const unregisterSubscription = (
  subscriberId: string
): ManagedStateActions[ManagedStateActionType.UNREGISTER_SUBSCRIPTION] => {
  return {
    type: ManagedStateActionType.UNREGISTER_SUBSCRIPTION,
    subscriberId,
  }
}

export const setValue = (valueId: string, value: any): ManagedStateActions[ManagedStateActionType.SET_VALUE] => {
  return {
    type: ManagedStateActionType.SET_VALUE,
    valueId,
    value,
  }
}
