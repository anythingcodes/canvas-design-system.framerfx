import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledH6 = styled.h6`
  font-family: 'AvenirNext-DemiBold';
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.Obsidian};
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
`;

StyledH6.displayName = 'H6';

export const H6 = ({textLabel, ...rest}) => <StyledH6 {...rest}>{textLabel}</StyledH6>;

H6.defaultProps = {
  height: 44,
  width: 194,
  textLabel: 'Heading 6',
};

addPropertyControls(H6, {
  textLabel: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Heading 6',
  },
});
