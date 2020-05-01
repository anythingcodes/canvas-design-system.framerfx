// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  horizontalScrollWidth: ControlDescription
  isLoading: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  horizontalScrollWidth: {
    title: "HorizontalScrollWidth",
    defaultValue: "",
    type: ControlType.String,
  },
  isLoading: {
    title: "IsLoading",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
