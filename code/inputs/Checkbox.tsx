import * as React from 'react';
import * as System from 'baseui/checkbox';
import {addPropertyControls} from 'framer';
import {controls, merge} from '../generated/Checkbox';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';
import {LabelPropertyControl} from '../utils/PropertyControls';

const InnerCheckbox: React.SFC<any> = ({checked: initialChecked, label, onChange: originalOnChange, ...props}) => {
  const [checked, setChecked] = useManagedState(initialChecked);
  const onChange = React.useCallback(
    e => {
      setChecked(e.target['checked']);
      if (typeof originalOnChange === 'function') {
        originalOnChange(e);
      }
    },
    [originalOnChange],
  );

  return (
    <System.Checkbox checked={checked} onChange={onChange} {...props}>
      {label}
    </System.Checkbox>
  );
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 125,
  height: 25,
};

addPropertyControls(Checkbox, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  required: merge(controls.required, {}),
  isError: merge(controls.isError, {}),
  isIndeterminate: merge(controls.isIndeterminate, {}),
  labelPlacement: merge(controls.labelPlacement, {}),
  checkmarkType: merge(controls.checkmarkType, {}),
  ...LabelPropertyControl,
});
