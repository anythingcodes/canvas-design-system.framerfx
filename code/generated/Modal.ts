// WARNING: This is an auto-generated file. Changes to this file will be lost!
import {ControlType, PropertyControls, ControlDescription} from 'framer';

export type Controls = {
  animate: ControlDescription;
  autofocus: ControlDescription;
  children: ControlDescription;
  closeable: ControlDescription;
  isOpen: ControlDescription;
  role: ControlDescription;
  size: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  animate: {title: 'Animate', defaultValue: false, type: ControlType.Boolean},
  autofocus: {
    title: 'Autofocus',
    defaultValue: false,
    type: ControlType.Boolean,
  },
  children: {title: 'Children', defaultValue: '', type: ControlType.String},
  closeable: {
    title: 'Closeable',
    defaultValue: false,
    type: ControlType.Boolean,
  },
  isOpen: {title: 'IsOpen', defaultValue: false, type: ControlType.Boolean},
  role: {
    title: 'Role',
    options: ['dialog', 'alertdialog'],
    optionTitles: ['Dialog', 'Alertdialog'],
    defaultValue: 'alertdialog',
    type: ControlType.Enum,
  },
  size: {
    title: 'Size',
    options: ['auto', 'default', 'full'],
    optionTitles: ['Auto', 'Default', 'Full'],
    defaultValue: 'auto',
    type: ControlType.Enum,
  },
};

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return {...inferredControls, ...overrides};
}
