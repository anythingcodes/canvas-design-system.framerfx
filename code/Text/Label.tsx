import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledLabel = styled.label`
  font-family: 'AvenirNext-DemiBold';
  font-size: 14px;
  user-select: none;
  color: ${colors.Obsidian};
  cursor: pointer;
  padding: 8px 12px 4px 0;
  display: inline-block;
  vertical-align: middle;
`;

StyledLabel.displayName = 'Label';

export const Label = ({label, ...rest}) => <StyledLabel {...rest}>{label}</StyledLabel>;

Label.defaultProps = {
  height: 44,
  width: 194,
  label: 'Label',
};

addPropertyControls(Label, {
  label: {
    title: 'Label',
    type: ControlType.String,
    defaultValue: 'Label',
  },
});
