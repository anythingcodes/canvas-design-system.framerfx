// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  autoFocus: ControlDescription
  checked: ControlDescription
  children: ControlDescription
  description: ControlDescription
  disabled: ControlDescription
  isError: ControlDescription
  labelPlacement: ControlDescription
  name: ControlDescription
  required: ControlDescription
  value: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  description: {
    title: "Description",
    defaultValue: "",
    type: ControlType.String,
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  isError: { title: "IsError", defaultValue: false, type: ControlType.Boolean },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["left", "right", "top", "bottom"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    type: ControlType.Enum,
  },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
