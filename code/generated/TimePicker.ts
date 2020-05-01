// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  format: ControlDescription
  positive: ControlDescription
  error: ControlDescription
  creatable: ControlDescription
  disabled: ControlDescription
  step: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  format: {
    title: "Format",
    options: ["12", "24"],
    optionTitles: ["12", "24"],
    defaultValue: "12",
    type: ControlType.Enum,
  },
  positive: {
    title: "Positive",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  error: { title: "Error", defaultValue: false, type: ControlType.Boolean },
  creatable: {
    title: "Creatable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  step: { title: "Step", type: ControlType.Number },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
