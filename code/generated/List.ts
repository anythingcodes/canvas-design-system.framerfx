// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  removable: ControlDescription
  removableByMove: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  removable: {
    title: "Removable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  removableByMove: {
    title: "RemovableByMove",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
