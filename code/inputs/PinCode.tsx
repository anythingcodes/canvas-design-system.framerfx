import * as System from 'baseui/pin-code';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {controls, merge} from '../generated/PinCode';
import {useManagedState} from '../utils/useManagedState';
import {withHOC} from '../withHOC';

const InnerPinCode: React.SFC<any> = ({values, length, onChange: originalOnChange, ...props}) => {
  const initialValues = Array.from(new Array(length), () => '');
  const [currentValues, setValues] = useManagedState<string[]>(initialValues);

  const onChange = React.useCallback(
    e => {
      setValues(e.values);
      if (typeof originalOnChange === 'function') {
        originalOnChange(e.values);
      }
    },
    [originalOnChange],
  );

  return <System.PinCode values={currentValues} onChange={onChange} {...props} />;
};

export const PinCode = withHOC(InnerPinCode);

PinCode.defaultProps = {
  width: 225,
  height: 56,
};

addPropertyControls(PinCode, {
  length: {
    title: 'Length',
    type: ControlType.Number,
    displayStepper: true,
    min: 1,
    defaultValue: 4,
  },
  positive: merge(controls.positive, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  placeholder: merge(controls.placeholder, {defaultValue: '•'}),
  size: merge(controls.size, {}),
});
