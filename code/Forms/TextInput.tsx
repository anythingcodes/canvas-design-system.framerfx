import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';
import {Label} from '../Text/Label';
import {Caption} from '../Text/Caption';

const Container = styled.div`
  display: ${({inline}) => inline && 'flex'};
  input {
    font-family: 'Avenir Next';
    border: 3px solid;
    border-color: ${({state}) =>
      state === 'error' ? colors['Candy Apple'] : state === 'positive' ? colors['Oz Medium'] : 'transparent'};
    padding: 9px 10px;
    border-radius: 3px;
    border: 1px solid ${colors.Battleship};
    font-size: 16px;
    transition: all 0.15s ease-out;
    background-color: ${colors.Gypsum};
    color: ${colors.Obsidian};
    display: block;
    min-height: 40px;
    line-height: 22px;
    text-align: left;
    vertical-align: middle;
    width: 100%;
  }
`;

Container.displayName = 'TextInput';

// TODO: for/id
export const TextInput = ({caption, disabled, label, placeholder, value, showCaption, showLabel, ...rest}) => (
  <Container {...rest}>
    {showLabel && <Label label={label} htmlFor="TODO:" />}
    {showCaption && <Caption caption={caption} />}
    <input value={value} disabled={disabled} type="text" placeholder={placeholder} id="TODO:" />
  </Container>
);

TextInput.defaultProps = {
  width: 366,
  height: 72,
  caption: 'Caption text',
  disabled: false,
  label: 'Label text',
  placeholder: 'Placeholder text',
  showLabel: true,
  showCaption: true,
  value: '',
};

addPropertyControls(TextInput, {
  showLabel: {
    defaultValue: true,
    disabledTitle: 'Hide',
    enabledTitle: 'Show',
    title: 'Show Label',
    type: ControlType.Boolean,
  },
  label: {
    hidden({showLabel}) {
      return showLabel === false;
    },
    title: 'Label',
    type: ControlType.String,
  },
  placeholder: {
    title: 'Placeholder',
    type: ControlType.String,
  },
  disabled: {
    title: 'Disabled',
    type: ControlType.Boolean,
  },
  value: {
    title: 'Value',
    type: ControlType.String,
  },
  state: {
    defaultValue: 'default',
    options: ['default', 'error', 'positive'],
    optionTitles: ['Default', 'Error', 'Positive'],
    title: 'State',
    type: ControlType.Enum,
  },
  showCaption: {
    defaultValue: true,
    disabledTitle: 'Hide',
    enabledTitle: 'Show',
    title: 'Show Caption',
    type: ControlType.Boolean,
  },
  caption: {
    hidden({showCaption}) {
      return showCaption === false;
    },
    title: 'Caption',
    type: ControlType.String,
  },
  inline: {
    defaultValue: false,
    disabledTitle: 'Inline',
    enabledTitle: 'Stacked',
    title: 'Inline',
    type: ControlType.Boolean,
  },
});
