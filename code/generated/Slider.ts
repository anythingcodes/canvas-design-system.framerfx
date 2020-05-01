// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  min: ControlDescription
  max: ControlDescription
  step: ControlDescription
  disabled: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  min: { title: "Min", type: ControlType.Number },
  max: { title: "Max", type: ControlType.Number },
  step: { title: "Step", type: ControlType.Number },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
