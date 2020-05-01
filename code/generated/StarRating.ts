// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  value: ControlDescription
  numItems: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  value: { title: "Value", type: ControlType.Number },
  numItems: { title: "NumItems", type: ControlType.Number },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
