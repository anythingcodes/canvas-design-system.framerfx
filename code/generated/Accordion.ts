// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  accordion: ControlDescription
  children: ControlDescription
  disabled: ControlDescription
  renderPanelContent: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  accordion: {
    title: "Accordion",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  renderPanelContent: {
    title: "RenderPanelContent",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
