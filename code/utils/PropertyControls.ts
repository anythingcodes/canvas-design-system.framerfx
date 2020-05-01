import {ControlType, PropertyControls, ControlDescription} from 'framer';
import * as React from 'react';

export const ThemePropertyControl: PropertyControls = {
  theme: {
    title: 'Theme',
    options: ['dark', 'light', 'inherit'],
    optionTitles: ['Dark', 'Light', 'Inherit'],
    defaultValue: 'inherit',
    type: ControlType.Enum,
  },
};

export const LabelPropertyControl: PropertyControls = {
  label: {
    title: 'Label',
    type: ControlType.String,
    defaultValue: 'Default Label',
  },
};

export const TextPropertyControl: PropertyControls = {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Default Text',
  },
};

export const ColorPropertyControl: PropertyControls = {
  color: {
    title: 'Color',
    type: ControlType.Color,
    defaultValue: '#000000',
  },
};

export const ItemPropertyControlDescription: ControlDescription = {
  title: 'Items',
  type: ControlType.Array,
  propertyControl: {
    type: ControlType.String,
  },
};

/**
 * Adds controls for global state management, to be used in conjunction with the `withManagedState` HoC.
 *
 * @TODO - Add a "Global State Scope" to allow scoping of global variables
 */
export const UseGlobalStatePropertyControls: PropertyControls = {
  shouldUseGlobalState: {
    title: 'Global Variable',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  globalStateKey: {
    title: 'Variable',
    type: ControlType.String,
    hidden: props => !props.shouldUseGlobalState,
  },
};

export const CommonInputPropertyControls: PropertyControls = {
  disabled: {type: ControlType.Boolean, title: 'Disabled', defaultValue: false},
  placeholder: {type: ControlType.String, title: 'Placeholder', defaultValue: 'Placeholder'},
  value: {type: ControlType.String, title: 'Value', defaultValue: ''},
  clearable: {
    title: 'Clearable',
    defaultValue: false,
    type: ControlType.Boolean,
  },
  size: {
    title: 'Size',
    options: ['default', 'compact', 'large'],
    optionTitles: ['Default', 'Compact', 'Large'],
    defaultValue: 'default',
    type: ControlType.Enum,
  },
  inputState: {
    title: 'State',
    type: ControlType.Enum,
    options: ['default', 'error', 'positive'],
    optionTitles: ['Default', 'Error', 'Positive'],
    hidden: props => ('formValidationType' in props ? props.formValidationType !== 'none' : false),
  },
};

/**
 * Adds controls for form validation.
 *
 * These controls are meant to be used in conjunction with the `useFormFieldValidation` function.
 */
export const FormControlPropertyControls: PropertyControls = {
  showLabel: {type: ControlType.Boolean, title: 'Label', enabledTitle: 'Show', disabledTitle: 'Hide'},
  label: {type: ControlType.String, title: 'Label Text', defaultValue: 'Label', hidden: props => !props.showLabel},

  showCaption: {type: ControlType.Boolean, title: 'Caption', enabledTitle: 'Show', disabledTitle: 'Hide'},
  caption: {
    type: ControlType.String,
    title: 'Caption Text',
    defaultValue: 'Caption',
    hidden: props => !props.showCaption,
  },
  errorMessage: {
    type: ControlType.String,
    title: 'Error Caption',
    defaultValue: 'Error caption',
    hidden: props => !props.showCaption,
  },
  positiveMessage: {
    type: ControlType.String,
    title: 'Positive Caption',
    defaultValue: 'Positive caption',
    hidden: props => !props.showCaption,
  },
};

export const FormValidationPropertyControls: PropertyControls = {
  formValidationType: {
    title: 'Validation Type',
    type: ControlType.Enum,
    options: ['none', 'number', 'string', 'regex'],
    optionTitles: ['No Validation', 'Number', 'String', 'RegExp'],
    defaultValue: 'none',
  },

  // Regex Fields
  formValidationTypeRegex: {
    type: ControlType.String,
    title: 'RegEx',
    defaultValue: '.+',
    hidden: props => props.formValidationType !== 'regex',
  },

  // Number Fields
  formValidationTypeNumberMin: {
    type: ControlType.Number,
    title: 'Min Number',
    hidden: props => props.formValidationType !== 'number',
  },
  formValidationTypeNumberMax: {
    type: ControlType.Number,
    title: 'Max Number',
    hidden: props => props.formValidationType !== 'number',
  },

  // String Fields
  formValidationTypeStringMinLength: {
    type: ControlType.Number,
    title: 'Min Length',
    hidden: props => props.formValidationType !== 'string',
  },
  formValidationTypeStringMaxLength: {
    type: ControlType.Number,
    title: 'Max Length',
    hidden: props => props.formValidationType !== 'string',
  },
};

export type FormValidationProps =
  | {formValidationType: 'any'; positiveMessage?: string; errorMessage?: string}
  | {formValidationType: 'regex'; formValidationTypeRegex: string; positiveMessage?: string; errorMessage?: string}
  | {
      formValidationType: 'number';
      formValidationTypeNumberMax: number;
      formValidationTypeNumberMin: number;
      positiveMessage?: string;
      errorMessage?: string;
    }
  | {
      formValidationType: 'string';
      formValidationTypeStringMinLength: number;
      formValidationTypeStringMaxLength: number;
      positiveMessage?: string;
      errorMessage?: string;
    };

function createValidator(props: FormValidationProps) {
  return (value: any) => {
    if (props.formValidationType === 'regex') {
      return new RegExp(props.formValidationTypeRegex).test(value);
    }
    if (props.formValidationType === 'number') {
      const number = Number(value);
      return props.formValidationTypeNumberMax >= number && number >= props.formValidationTypeNumberMin;
    }
    if (props.formValidationType === 'string') {
      const string = String(value || '');
      return (
        props.formValidationTypeStringMinLength >= string.length &&
        string.length <= props.formValidationTypeStringMaxLength
      );
    }
  };
}

type ValidationResult = {
  error?: string;
  positive?: string;
};

type StartValidationFunction<T> = (props: T, value: any) => void;

export function useFormControlValidation<T extends FormValidationProps>(): [
  ValidationResult,
  StartValidationFunction<T>,
] {
  const [validationResult, setValidationResult] = React.useState<ValidationResult>({});

  function startValidation(props: T, value: any) {
    const validator = createValidator(props);
    const validationResult = validator(value)
      ? {
          positive: props.positiveMessage,
        }
      : {
          error: props.errorMessage,
        };

    setValidationResult(validationResult);
  }

  return [validationResult, startValidation];
}
