import * as React from 'react';
import {FormControl, FormControlProps} from 'baseui/form-control';
import * as System from 'baseui/datepicker';
import {addPropertyControls, ControlType} from 'framer';
import {controls, merge} from '../generated/TimePicker';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';
import {CommonInputPropertyControls, FormControlPropertyControls} from '../utils/PropertyControls';

const InnerTimePicker: React.SFC<any> = ({
  value: initialValue,
  onChange: originalOnChange,
  disabled,
  showLabel,
  label,
  showCaption,
  caption,
  inputState,
  ...props
}) => {
  const [value, setValue] = useManagedState(new Date(initialValue) || null);

  const onChange = React.useCallback(
    e => {
      setValue(e);
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
      <System.TimePicker
        disabled={disabled}
        value={value}
        onChange={onChange}
        positive={inputState === 'positive'}
        error={inputState === 'error'}
        {...props}
      />
    </FormControl>
  );
};

export const TimePicker = withHOC(InnerTimePicker);

TimePicker.defaultProps = {
  width: 350,
  height: 120,
};

addPropertyControls(TimePicker, {
  format: merge(controls.format, {defaultValue: '12'}),
  disabled: merge(controls.disabled, {defaultValue: false}),
  inputState: CommonInputPropertyControls.inputState,
  value: {
    type: ControlType.String,
    title: 'Value',
    defaultValue: new Date().toISOString(),
  },
  ...FormControlPropertyControls,
});
