import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledH3 = styled.h3`
  font-family: 'AvenirNext-Regular';
  font-weight: 500;
  font-size: 22px;
  color: ${colors.Obsidian};
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
`;

StyledH3.displayName = 'H3';

export const H3 = ({textLabel, ...rest}) => <StyledH3 {...rest}>{textLabel}</StyledH3>;

H3.defaultProps = {
  height: 44,
  width: 194,
  textLabel: 'Heading 3',
};

addPropertyControls(H3, {
  textLabel: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Heading 3',
  },
});
