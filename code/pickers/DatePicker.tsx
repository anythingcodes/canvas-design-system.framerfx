import * as React from 'react';
import {FormControl, FormControlProps} from 'baseui/form-control';
import * as System from 'baseui/datepicker';
import {addPropertyControls, ControlType} from 'framer';
import {controls, merge} from '../generated/Datepicker';
import {useManagedState} from '../utils/useManagedState';
import {withHOC} from '../withHOC';
import {CommonInputPropertyControls, FormControlPropertyControls} from '../utils/PropertyControls';

function parseDateString(date) {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.valueOf())) {
    return null;
  }
  return parsedDate;
}

const InnerDatepicker: React.SFC<any> = ({
  date,
  fromDate,
  toDate,
  onChange: originalOnChange,
  disabled,
  showLabel,
  label,
  showCaption,
  caption,
  inputState,
  ...props
}) => {
  const [singleDate, setSingleDate] = useManagedState(parseDateString(date));
  const [rangeDate, setRangeDate] = useManagedState([parseDateString(fromDate), parseDateString(toDate)]);
  const onChange = React.useCallback(e => {
    if (props.range) {
      setRangeDate(e.date);
    } else {
      setSingleDate(e.date);
    }
    if (typeof originalOnChange === 'function') {
      originalOnChange(e);
    }
  }, []);

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
      <System.Datepicker
        disabled={disabled}
        value={props.range ? rangeDate : singleDate}
        onChange={onChange}
        positive={inputState === 'positive'}
        error={inputState === 'error'}
        {...props}
      />
    </FormControl>
  );
};

export const Datepicker = withHOC(InnerDatepicker);

const defaultFormat = 'yyyy-MM-dd';
Datepicker.defaultProps = {
  width: 150,
  height: 120,
  formatString: defaultFormat,
};

addPropertyControls(Datepicker, {
  monthsShown: merge(controls.monthsShown, {
    defaultValue: 1,
    min: 1,
    max: 5,
    displayStepper: true,
  }),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {
    defaultValue: defaultFormat,
  }),
  formatString: merge(controls.formatString, {defaultValue: defaultFormat}),
  date: {
    type: ControlType.String,
    title: 'Date',
    defaultValue: new Date().toISOString(),
    hidden: props => props.range,
  },
  fromDate: {
    type: ControlType.String,
    title: 'From Date',
    defaultValue: new Date().toISOString(),
    hidden: props => !props.range,
  },
  toDate: {
    type: ControlType.String,
    title: 'To Date',
    defaultValue: new Date().toISOString(),
    hidden: props => !props.range,
  },
  range: {
    type: ControlType.Boolean,
    title: 'Range',
    defaultValue: false,
  },
  inputState: CommonInputPropertyControls.inputState,
  ...FormControlPropertyControls,
});
