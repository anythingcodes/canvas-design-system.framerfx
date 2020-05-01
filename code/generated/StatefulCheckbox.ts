// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  disabled: ControlDescription
  isError: ControlDescription
  labelPlacement: ControlDescription
  isIndeterminate: ControlDescription
  children: ControlDescription
  autoFocus: ControlDescription
  checkmarkType: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
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
  isIndeterminate: {
    title: "IsIndeterminate",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean,
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
