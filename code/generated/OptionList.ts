// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  size: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  size: {
    title: "Size",
    options: ["default", "compact"],
    optionTitles: ["Default", "Compact"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
