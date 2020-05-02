export interface GlobalState {
  managedState: ManagedState
}

export interface ManagedState {
  subscriptions: {
    [valueId: string]: string[]
  }
  values: {
    [id: string]: any
  }
}

export enum ManagedStateActionType {
  REGISTER_SUBSCRIPTION,
  UNREGISTER_SUBSCRIPTION,
  SET_VALUE,
}

export type ManagedStateActions = {
  [ManagedStateActionType.REGISTER_SUBSCRIPTION]: {
    type: ManagedStateActionType.REGISTER_SUBSCRIPTION
    subscriberId: string
    valueId: string
    initialValue?: any
  }
  [ManagedStateActionType.UNREGISTER_SUBSCRIPTION]: {
    type: ManagedStateActionType.UNREGISTER_SUBSCRIPTION
    subscriberId: string
  }
  [ManagedStateActionType.SET_VALUE]: {
    type: ManagedStateActionType.SET_VALUE
    valueId: string
    value: any
  }
}
