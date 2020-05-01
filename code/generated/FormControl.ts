// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  children: ControlDescription
  disabled: ControlDescription
  label: ControlDescription
  caption: ControlDescription
  error: ControlDescription
  positive: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  caption: { title: "Caption", defaultValue: "", type: ControlType.String },
  error: { title: "Error", defaultValue: "", type: ControlType.String },
  positive: { title: "Positive", defaultValue: "", type: ControlType.String },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
