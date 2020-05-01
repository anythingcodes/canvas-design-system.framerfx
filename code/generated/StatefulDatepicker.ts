// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  autoFocusCalendar: ControlDescription
  quickSelect: ControlDescription
  range: ControlDescription
  monthsShown: ControlDescription
  orientation: ControlDescription
  peekNextMonth: ControlDescription
  timeSelectStart: ControlDescription
  timeSelectEnd: ControlDescription
  trapTabbing: ControlDescription
  disabled: ControlDescription
  error: ControlDescription
  positive: ControlDescription
  placeholder: ControlDescription
  required: ControlDescription
  formatString: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocusCalendar: {
    title: "AutoFocusCalendar",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  quickSelect: {
    title: "QuickSelect",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  range: { title: "Range", defaultValue: false, type: ControlType.Boolean },
  monthsShown: { title: "MonthsShown", type: ControlType.Number },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    defaultValue: "horizontal",
    type: ControlType.Enum,
  },
  peekNextMonth: {
    title: "PeekNextMonth",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  timeSelectStart: {
    title: "TimeSelectStart",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  timeSelectEnd: {
    title: "TimeSelectEnd",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  trapTabbing: {
    title: "TrapTabbing",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  error: { title: "Error", defaultValue: false, type: ControlType.Boolean },
  positive: {
    title: "Positive",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String,
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  formatString: {
    title: "FormatString",
    defaultValue: "",
    type: ControlType.String,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
