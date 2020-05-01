// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  activeItemId: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  activeItemId: {
    title: "ActiveItemId",
    defaultValue: "",
    type: ControlType.String,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
