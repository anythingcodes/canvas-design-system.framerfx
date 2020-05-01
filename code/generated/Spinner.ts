// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  size: ControlDescription
  color: ControlDescription
  title: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  color: { title: "Color", defaultValue: "", type: ControlType.String },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
