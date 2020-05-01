// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  children: ControlDescription
  disabled: ControlDescription
  key: ControlDescription
  title: ControlDescription
  renderPanelContent: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  key: { title: "Key", defaultValue: "", type: ControlType.String },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  renderPanelContent: {
    title: "RenderPanelContent",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
