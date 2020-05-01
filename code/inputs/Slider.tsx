import * as React from 'react';
import {FormControl, FormControlProps} from 'baseui/form-control';
import {Slider as BaseSlider} from 'baseui/slider';
import {ControlType, addPropertyControls} from 'framer';
import {controls, merge} from '../generated/Slider';
import {CommonInputPropertyControls, FormControlPropertyControls} from '../utils/PropertyControls';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';

const InnerSlider: React.SFC<any> = ({
  kind,
  value: initialValue,
  valueFrom,
  valueTo,
  onChange: originalOnChange,
  disabled,
  showLabel,
  label,
  showCaption,
  caption,
  inputState,
  ...props
}) => {
  const [value, setValue] = useManagedState<number[]>(kind === 'single-value' ? [initialValue] : [valueFrom, valueTo]);

  const onChange = React.useCallback(
    e => {
      setValue(e.value);
      if (typeof originalOnChange === 'function') {
        originalOnChange(e.value);
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
      <BaseSlider disabled={disabled} value={value} onChange={onChange} {...props} />
    </FormControl>
  );
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 275,
  height: 180,
};

addPropertyControls(Slider, {
  kind: {
    type: ControlType.Enum,
    title: 'Kind',
    options: ['single-value', 'range'],
    optionTitles: ['Single Value', 'Range'],
    defaultValue: 'single-value',
  },
  value: {
    type: ControlType.Number,
    title: 'Value',
    defaultValue: 2,
    hidden: props => props.kind !== 'single-value',
  },
  valueFrom: {
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true,
    hidden: props => props.kind !== 'range',
  },
  valueTo: {type: ControlType.Number, defaultValue: 2, displayStepper: true, hidden: props => props.kind !== 'range'},
  min: merge(controls.min, {defaultValue: 0, displayStepper: true}),
  max: merge(controls.max, {defaultValue: 10, displayStepper: true}),
  step: merge(controls.step, {
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
  }),
  disabled: merge(controls.disabled, {}),
  inputState: CommonInputPropertyControls.inputState,
  ...FormControlPropertyControls,
});
