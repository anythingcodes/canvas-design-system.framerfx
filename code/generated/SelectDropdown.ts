// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  error: ControlDescription
  isLoading: ControlDescription
  labelKey: ControlDescription
  maxDropdownHeight: ControlDescription
  multi: ControlDescription
  noResultsMsg: ControlDescription
  required: ControlDescription
  searchable: ControlDescription
  size: ControlDescription
  type: ControlDescription
  valueKey: ControlDescription
  width: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  error: { title: "Error", defaultValue: false, type: ControlType.Boolean },
  isLoading: {
    title: "IsLoading",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  labelKey: { title: "LabelKey", defaultValue: "", type: ControlType.String },
  maxDropdownHeight: {
    title: "MaxDropdownHeight",
    defaultValue: "",
    type: ControlType.String,
  },
  multi: { title: "Multi", defaultValue: false, type: ControlType.Boolean },
  noResultsMsg: {
    title: "NoResultsMsg",
    defaultValue: "",
    type: ControlType.String,
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  searchable: {
    title: "Searchable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
  type: {
    title: "Type",
    options: ["select", "search"],
    optionTitles: ["Select", "Search"],
    defaultValue: "select",
    type: ControlType.Enum,
  },
  valueKey: { title: "ValueKey", defaultValue: "", type: ControlType.String },
  width: { title: "Width", type: ControlType.Number },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
