import * as React from 'react';
import {FormControl, FormControlProps} from 'baseui/form-control';
import {Textarea as BaseTextarea} from 'baseui/textarea';
import {addPropertyControls} from 'framer';
import {controls, merge} from '../generated/Textarea';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';
import {CommonInputPropertyControls, FormControlPropertyControls} from '../utils/PropertyControls';

const InnerTextarea: React.SFC<any> = ({
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
      setValue(e.target['value']);
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
      <BaseTextarea
        value={value}
        onChange={onChange}
        positive={inputState === 'positive'}
        error={inputState === 'error'}
        disabled={disabled}
        {...props}
      />
    </FormControl>
  );
};

export const Textarea = withHOC(InnerTextarea);

Textarea.defaultProps = {
  width: 300,
  height: 220,
};

addPropertyControls(Textarea, {
  rows: merge(controls.rows, {
    defaultValue: 5,
    min: 1,
    max: 100,
    displayStepper: true,
  }),
  ...CommonInputPropertyControls,
  ...FormControlPropertyControls,
});
