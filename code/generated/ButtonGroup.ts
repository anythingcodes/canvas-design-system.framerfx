// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  ariaLabel: ControlDescription
  children: ControlDescription
  disabled: ControlDescription
  mode: ControlDescription
  selected: ControlDescription
  shape: ControlDescription
  size: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  mode: {
    title: "Mode",
    options: ["checkbox", "radio"],
    optionTitles: ["Checkbox", "Radio"],
    defaultValue: "checkbox",
    type: ControlType.Enum,
  },
  selected: { title: "Selected", type: ControlType.Number },
  shape: {
    title: "Shape",
    options: ["default", "round", "square"],
    optionTitles: ["Default", "Round", "Square"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
