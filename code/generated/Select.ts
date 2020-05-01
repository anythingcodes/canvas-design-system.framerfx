// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  autoFocus: ControlDescription
  backspaceRemoves: ControlDescription
  clearable: ControlDescription
  closeOnSelect: ControlDescription
  creatable: ControlDescription
  deleteRemoves: ControlDescription
  disabled: ControlDescription
  error: ControlDescription
  positive: ControlDescription
  escapeClearsValue: ControlDescription
  filterOutSelected: ControlDescription
  id: ControlDescription
  isLoading: ControlDescription
  labelKey: ControlDescription
  startOpen: ControlDescription
  maxDropdownHeight: ControlDescription
  multi: ControlDescription
  noResultsMsg: ControlDescription
  onBlurResetsInput: ControlDescription
  onCloseResetsInput: ControlDescription
  onSelectResetsInput: ControlDescription
  openOnClick: ControlDescription
  placeholder: ControlDescription
  required: ControlDescription
  searchable: ControlDescription
  size: ControlDescription
  type: ControlDescription
  valueKey: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  backspaceRemoves: {
    title: "BackspaceRemoves",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  clearable: {
    title: "Clearable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  closeOnSelect: {
    title: "CloseOnSelect",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  creatable: {
    title: "Creatable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  deleteRemoves: {
    title: "DeleteRemoves",
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
  escapeClearsValue: {
    title: "EscapeClearsValue",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  filterOutSelected: {
    title: "FilterOutSelected",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  isLoading: {
    title: "IsLoading",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  labelKey: { title: "LabelKey", defaultValue: "", type: ControlType.String },
  startOpen: {
    title: "StartOpen",
    defaultValue: false,
    type: ControlType.Boolean,
  },
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
  onBlurResetsInput: {
    title: "OnBlurResetsInput",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  onCloseResetsInput: {
    title: "OnCloseResetsInput",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  onSelectResetsInput: {
    title: "OnSelectResetsInput",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  openOnClick: {
    title: "OpenOnClick",
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
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
