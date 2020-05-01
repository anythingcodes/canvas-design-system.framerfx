// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  accessibilityType: ControlDescription
  id: ControlDescription
  ignoreBoundary: ControlDescription
  onMouseEnterDelay: ControlDescription
  onMouseLeaveDelay: ControlDescription
  placement: ControlDescription
  showArrow: ControlDescription
  triggerType: ControlDescription
  animateOutTime: ControlDescription
  children: ControlDescription
  content: ControlDescription
  dismissOnClickOutside: ControlDescription
  dismissOnEsc: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  accessibilityType: {
    title: "AccessibilityType",
    options: ["none", "menu", "tooltip"],
    optionTitles: ["None", "Menu", "Tooltip"],
    defaultValue: "none",
    type: ControlType.Enum,
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  ignoreBoundary: {
    title: "IgnoreBoundary",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  onMouseEnterDelay: { title: "OnMouseEnterDelay", type: ControlType.Number },
  onMouseLeaveDelay: { title: "OnMouseLeaveDelay", type: ControlType.Number },
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
  showArrow: {
    title: "ShowArrow",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  triggerType: {
    title: "TriggerType",
    options: ["click", "hover"],
    optionTitles: ["Click", "Hover"],
    defaultValue: "click",
    type: ControlType.Enum,
  },
  animateOutTime: { title: "AnimateOutTime", type: ControlType.Number },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  content: { title: "Content", defaultValue: "", type: ControlType.String },
  dismissOnClickOutside: {
    title: "DismissOnClickOutside",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  dismissOnEsc: {
    title: "DismissOnEsc",
    defaultValue: false,
    type: ControlType.Boolean,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
