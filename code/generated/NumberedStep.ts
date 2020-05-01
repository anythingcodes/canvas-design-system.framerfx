// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  title: ControlDescription
  isCompleted: ControlDescription
  isActive: ControlDescription
  isLast: ControlDescription
  children: ControlDescription
  step: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  isCompleted: {
    title: "IsCompleted",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  isActive: {
    title: "IsActive",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  isLast: { title: "IsLast", defaultValue: false, type: ControlType.Boolean },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  step: { title: "Step", defaultValue: "", type: ControlType.String },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
