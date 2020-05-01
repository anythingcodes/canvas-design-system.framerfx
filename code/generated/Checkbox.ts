// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  children: ControlDescription
  checked: ControlDescription
  disabled: ControlDescription
  required: ControlDescription
  isError: ControlDescription
  autoFocus: ControlDescription
  type: ControlDescription
  name: ControlDescription
  value: ControlDescription
  isIndeterminate: ControlDescription
  labelPlacement: ControlDescription
  checkmarkType: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  isError: { title: "IsError", defaultValue: false, type: ControlType.Boolean },
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  type: { title: "Type", defaultValue: "", type: ControlType.String },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  isIndeterminate: {
    title: "IsIndeterminate",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["left", "right", "top", "bottom"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    type: ControlType.Enum,
  },
  checkmarkType: {
    title: "CheckmarkType",
    options: ["default", "toggle"],
    optionTitles: ["Default", "Toggle"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
