import * as React from 'react';
import * as System from 'baseui/select';
import {FormControl, FormControlProps} from 'baseui/form-control';
import {addPropertyControls, ControlType} from 'framer';
import {controls, merge} from '../generated/Select';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';
import {CommonInputPropertyControls, FormControlPropertyControls} from '../utils/PropertyControls';
import {omit} from '../utils/omit';

const InnerSelect: React.SFC<any> = ({
  options,
  onChange: originalOnChange,
  disabled,
  showLabel,
  label,
  showCaption,
  caption,
  inputState,
  ...props
}) => {
  const [value, setValue] = useManagedState<Readonly<System.Option[]>>([]);

  const onChange = React.useCallback(
    e => {
      setValue(e.value);
      console.log(e.value);
      if (typeof originalOnChange === 'function') {
        originalOnChange(e);
      }
    },
    [originalOnChange],
  );

  const formControlProps: Partial<FormControlProps> = {
    disabled,
    label: showLabel ? label : null,
  };

  if (showCaption) {
    formControlProps.caption = caption;
    formControlProps.error = inputState === 'error' ? props.errorMessage : null;
    formControlProps.positive = inputState === 'positive' ? props.positiveMessage : null;
  }

  return (
    <FormControl {...formControlProps}>
      <System.Select
        value={value}
        options={options.map(o => ({label: o}))}
        onChange={onChange}
        labelKey="label"
        valueKey="label"
        searchable={props.type === 'search'}
        disabled={disabled}
        positive={inputState === 'positive'}
        error={inputState === 'error'}
        {...props}
      />
    </FormControl>
  );
};

export const Select = withHOC(InnerSelect);

Select.defaultProps = {
  width: 250,
  height: 120,
};

addPropertyControls(Select, {
  type: merge(controls.type, {}),
  options: {
    type: ControlType.Array,
    propertyControl: {type: ControlType.String},
    defaultValue: ['First option', 'Second option', 'Third option'],
  },
  backspaceRemoves: merge(controls.backspaceRemoves, {defaultValue: true}),
  closeOnSelect: merge(controls.closeOnSelect, {defaultValue: true}),
  deleteRemoves: merge(controls.deleteRemoves, {defaultValue: true}),
  escapeClearsValue: merge(controls.escapeClearsValue, {defaultValue: true}),
  filterOutSelected: merge(controls.filterOutSelected, {}),
  isLoading: merge(controls.isLoading, {}),
  startOpen: merge(controls.startOpen, {}),
  maxDropdownHeight: {
    type: ControlType.Number,
    unit: 'px',
    min: 0,
    max: 500,
    defaultValue: 200,
  },
  noResultsMsg: merge(controls.noResultsMsg, {
    defaultValue: '🤷‍♂️ No results found',
    hidden: props => props.type !== 'search',
  }),
  openOnClick: merge(controls.openOnClick, {}),
  placeholder: {type: ControlType.String, title: 'Placeholder', defaultValue: 'Select'},
  ...omit(CommonInputPropertyControls, ['clearable', 'placeholder', 'value']),
  ...FormControlPropertyControls,
});
