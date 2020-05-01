// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  maxDropdownHeight: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  maxDropdownHeight: {
    title: "MaxDropdownHeight",
    defaultValue: "",
    type: ControlType.String,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
