// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  active: ControlDescription
  children: ControlDescription
  disabled: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  active: { title: "Active", defaultValue: false, type: ControlType.Boolean },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
