// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  children: ControlDescription
  activeKey: ControlDescription
  disabled: ControlDescription
  renderAll: ControlDescription
  orientation: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  activeKey: { title: "ActiveKey", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  renderAll: {
    title: "RenderAll",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    defaultValue: "horizontal",
    type: ControlType.Enum,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
