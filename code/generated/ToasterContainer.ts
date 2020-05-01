// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  placement: ControlDescription
  usePortal: ControlDescription
  autoHideDuration: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  placement: {
    title: "Placement",
    options: ["top", "bottom", "topLeft", "topRight", "bottomRight", "bottomLeft"],
    optionTitles: ["Top", "Bottom", "TopLeft", "TopRight", "BottomRight", "BottomLeft"],
    defaultValue: "top",
    type: ControlType.Enum,
  },
  usePortal: {
    title: "UsePortal",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  autoHideDuration: { title: "AutoHideDuration", type: ControlType.Number },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
