// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  children: ControlDescription
  placement: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  placement: {
    title: "Placement",
    options: [
      "auto",
      "left",
      "right",
      "top",
      "bottom",
      "topLeft",
      "topRight",
      "rightTop",
      "rightBottom",
      "bottomRight",
      "bottomLeft",
      "leftBottom",
      "leftTop",
    ],
    optionTitles: [
      "Auto",
      "Left",
      "Right",
      "Top",
      "Bottom",
      "TopLeft",
      "TopRight",
      "RightTop",
      "RightBottom",
      "BottomRight",
      "BottomLeft",
      "LeftBottom",
      "LeftTop",
    ],
    defaultValue: "auto",
    type: ControlType.Enum,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
