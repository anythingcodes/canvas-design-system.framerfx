import {FormControl, FormControlProps} from 'baseui/form-control';
import {PhoneInput as BasePhoneInput, COUNTRIES} from 'baseui/phone-input';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {
  useFormControlValidation,
  FormControlPropertyControls,
  FormValidationPropertyControls,
  CommonInputPropertyControls,
} from '../utils/PropertyControls';
import {useManagedState} from '../utils/useManagedState';
import {withHOC} from '../withHOC';

const InnerFormControlPhoneInput = ({
  value: initialValue,
  placeholder,
  onTextChange: originalOnTextChange,
  onCountryChange: originalOnCountryChange,
  disabled,
  showLabel,
  label,
  showCaption,
  caption,
  inputState,
  ...props
}: any) => {
  const [value, setValue] = useManagedState<string>(initialValue);
  const [validationResult, startValidation] = useFormControlValidation();
  const [country, setCountry] = React.useState(COUNTRIES.US);

  const isValidationEnabled = props.formValidationType !== 'none';

  const formControlProps: Partial<FormControlProps> = {
    disabled,
    label: showLabel ? label : null,
  };

  if (showCaption && isValidationEnabled) {
    formControlProps.caption = caption;
    formControlProps.error = validationResult.error;
    formControlProps.positive = validationResult.positive;
  } else if (showCaption) {
    formControlProps.caption = caption;
    formControlProps.error = inputState === 'error' ? props.errorMessage : null;
    formControlProps.positive = inputState === 'positive' ? props.positiveMessage : null;
  }

  const onTextChange = React.useCallback(
    e => {
      setValue(e.target['value']);
      startValidation(props, country.dialCode + value);
      if (typeof originalOnTextChange === 'function') {
        originalOnTextChange(e);
      }
    },
    [originalOnTextChange],
  );

  const onCountryChange = React.useCallback(
    e => {
      setCountry(e.option);
      startValidation(props, country.dialCode + value);
      if (typeof originalOnCountryChange === 'function') {
        originalOnCountryChange(e);
      }
    },
    [originalOnCountryChange],
  );

  return (
    <FormControl {...formControlProps}>
      <BasePhoneInput
        text={value}
        country={country}
        onTextChange={onTextChange}
        onCountryChange={onCountryChange}
        positive={isValidationEnabled ? !!validationResult.positive : inputState === 'positive'}
        error={isValidationEnabled ? !!validationResult.error : inputState === 'error'}
      />
    </FormControl>
  );
};

export const PhoneInput = withHOC(InnerFormControlPhoneInput);

PhoneInput.defaultProps = {
  width: 400,
  height: 120,
};

addPropertyControls(PhoneInput, {
  ...CommonInputPropertyControls,
  ...FormControlPropertyControls,
  ...FormValidationPropertyControls,
  mask: {type: ControlType.String, defaultValue: '(999) 999-999-9999'},
});
