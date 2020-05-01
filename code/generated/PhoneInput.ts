// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  text: ControlDescription
  size: ControlDescription
  maxDropdownHeight: ControlDescription
  maxDropdownWidth: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  text: { title: "Text", defaultValue: "", type: ControlType.String },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
  maxDropdownHeight: {
    title: "MaxDropdownHeight",
    defaultValue: "",
    type: ControlType.String,
  },
  maxDropdownWidth: {
    title: "MaxDropdownWidth",
    defaultValue: "",
    type: ControlType.String,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
