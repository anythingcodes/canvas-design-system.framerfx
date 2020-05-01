// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  autoHideDuration: ControlDescription
  children: ControlDescription
  closeable: ControlDescription
  kind: ControlDescription
  notificationType: ControlDescription
  key: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoHideDuration: { title: "AutoHideDuration", type: ControlType.Number },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  closeable: {
    title: "Closeable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  kind: {
    title: "Kind",
    options: ["info", "positive", "warning", "negative"],
    optionTitles: ["Info", "Positive", "Warning", "Negative"],
    defaultValue: "info",
    type: ControlType.Enum,
  },
  notificationType: {
    title: "NotificationType",
    options: ["inline", "toast"],
    optionTitles: ["Inline", "Toast"],
    defaultValue: "inline",
    type: ControlType.Enum,
  },
  key: { title: "Key", defaultValue: "", type: ControlType.String },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
