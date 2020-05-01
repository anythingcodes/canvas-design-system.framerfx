import * as React from 'react';
import {FormControl, FormControlProps} from 'baseui/form-control';
import * as System from 'baseui/datepicker';
import {addPropertyControls} from 'framer';
import {controls, merge} from '../generated/TimezonePicker';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';
import {CommonInputPropertyControls, FormControlPropertyControls} from '../utils/PropertyControls';

const InnerTimezonePicker: React.SFC<any> = ({
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
  const [value, setValue] = useManagedState(initialValue);

  const onChange = React.useCallback(
    e => {
      setValue(e.id);
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
      <System.TimezonePicker
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

export const TimezonePicker = withHOC(InnerTimezonePicker);

TimezonePicker.defaultProps = {
  width: 350,
  height: 120,
};

addPropertyControls(TimezonePicker, {
  disabled: merge(controls.disabled, {}),
  value: merge(controls.value, {defaultValue: 'Pacific/Honolulu'}),
  inputState: CommonInputPropertyControls.inputState,
  ...FormControlPropertyControls,
});
