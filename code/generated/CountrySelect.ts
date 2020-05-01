// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  size: ControlDescription
  maxDropdownWidth: ControlDescription
  maxDropdownHeight: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
  maxDropdownWidth: {
    title: "MaxDropdownWidth",
    defaultValue: "",
    type: ControlType.String,
  },
  maxDropdownHeight: {
    title: "MaxDropdownHeight",
    defaultValue: "",
    type: ControlType.String,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
