// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  numPages: ControlDescription
  currentPage: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  numPages: { title: "NumPages", type: ControlType.Number },
  currentPage: { title: "CurrentPage", type: ControlType.Number },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
