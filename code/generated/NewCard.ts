// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  action: ControlDescription
  children: ControlDescription
  headerImage: ControlDescription
  thumbnail: ControlDescription
  title: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  action: { title: "Action", defaultValue: "", type: ControlType.String },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  headerImage: {
    title: "HeaderImage",
    defaultValue: "",
    type: ControlType.String,
  },
  thumbnail: { title: "Thumbnail", defaultValue: "", type: ControlType.String },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
