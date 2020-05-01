import {FormControl, FormControlProps} from 'baseui/form-control';
import {PaymentCard as BasePaymentCard} from 'baseui/payment-card';
import {addPropertyControls} from 'framer';
import * as React from 'react';
import {
  useFormControlValidation,
  FormControlPropertyControls,
  FormValidationPropertyControls,
  CommonInputPropertyControls,
} from '../utils/PropertyControls';
import {useManagedState} from '../utils/useManagedState';
import {withHOC} from '../withHOC';

const InnerFormControlPaymentCard = ({
  value: initialValue,
  placeholder,
  onChange: originalOnChange,
  onBlur: originalOnBlur,
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

  const onChange = React.useCallback(
    e => {
      setValue(e.target['value']);
      if (typeof originalOnChange === 'function') {
        originalOnChange(e);
      }
    },
    [originalOnChange],
  );

  const validateOnBlur = React.useCallback(
    e => {
      startValidation(props, value);
      if (typeof originalOnBlur === 'function') {
        originalOnBlur(e);
      }
    },
    [originalOnBlur],
  );

  return (
    <FormControl {...formControlProps}>
      <BasePaymentCard
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={isValidationEnabled ? validateOnBlur : null}
        positive={isValidationEnabled ? !!validationResult.positive : inputState === 'positive'}
        error={isValidationEnabled ? !!validationResult.error : inputState === 'error'}
      />
    </FormControl>
  );
};

export const PaymentCard = withHOC(InnerFormControlPaymentCard);

PaymentCard.defaultProps = {
  width: 400,
  height: 120,
};

addPropertyControls(PaymentCard, {
  ...CommonInputPropertyControls,
  ...FormControlPropertyControls,
  ...FormValidationPropertyControls,
});
