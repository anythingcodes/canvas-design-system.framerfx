// WARNING: This is an auto-generated file. Changes to this file will be lost!
import {ControlType, PropertyControls, ControlDescription} from 'framer';

export type Controls = {
  href: ControlDescription;
  target: ControlDescription;
  children: ControlDescription;
  disabled: ControlDescription;
  endEnhancer: ControlDescription;
  isLoading: ControlDescription;
  isSelected: ControlDescription;
  kind: ControlDescription;
  shape: ControlDescription;
  size: ControlDescription;
  startEnhancer: ControlDescription;
  type: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  href: {title: 'Href', defaultValue: '', type: ControlType.String},
  target: {title: 'Target', defaultValue: '', type: ControlType.String},
  children: {title: 'Children', defaultValue: '', type: ControlType.String},
  disabled: {
    title: 'Disabled',
    defaultValue: false,
    type: ControlType.Boolean,
  },
  endEnhancer: {
    title: 'EndEnhancer',
    defaultValue: '',
    type: ControlType.String,
  },
  isLoading: {
    title: 'IsLoading',
    defaultValue: false,
    type: ControlType.Boolean,
  },
  isSelected: {
    title: 'IsSelected',
    defaultValue: false,
    type: ControlType.Boolean,
  },
  kind: {
    title: 'Kind',
    options: ['primary', 'secondary', 'tertiary', 'minimal'],
    optionTitles: ['Primary', 'Secondary', 'Tertiary', 'Minimal'],
    defaultValue: 'primary',
    type: ControlType.Enum,
  },
  shape: {
    title: 'Shape',
    options: ['default', 'round', 'square', 'pill'],
    optionTitles: ['Default', 'Round', 'Square', 'Pill'],
    defaultValue: 'default',
    type: ControlType.Enum,
  },
  size: {
    title: 'Size',
    options: ['default', 'compact', 'large'],
    optionTitles: ['Default', 'Compact', 'Large'],
    defaultValue: 'default',
    type: ControlType.Enum,
  },
  startEnhancer: {
    title: 'StartEnhancer',
    defaultValue: '',
    type: ControlType.String,
  },
  type: {
    title: 'Type',
    options: ['submit', 'reset', 'button'],
    optionTitles: ['Submit', 'Reset', 'Button'],
    defaultValue: 'submit',
    type: ControlType.Enum,
  },
};

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return {...inferredControls, ...overrides};
}
