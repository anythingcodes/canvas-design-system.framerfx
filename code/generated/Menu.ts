// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  activedescendantId: ControlDescription
  highlightedIndex: ControlDescription
  noResultsMsg: ControlDescription
  size: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  activedescendantId: {
    title: "ActivedescendantId",
    defaultValue: "",
    type: ControlType.String,
  },
  highlightedIndex: { title: "HighlightedIndex", type: ControlType.Number },
  noResultsMsg: {
    title: "NoResultsMsg",
    defaultValue: "",
    type: ControlType.String,
  },
  size: {
    title: "Size",
    options: ["default", "compact"],
    optionTitles: ["Default", "Compact"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
