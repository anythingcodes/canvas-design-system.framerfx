import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledH2 = styled.h2`
  font-family: 'AvenirNext-Regular';
  font-weight: 400;
  font-size: 24px;
  color: ${colors.Obsidian};
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
`;

StyledH2.displayName = 'H2';

export const H2 = ({textLabel, ...rest}) => <StyledH2 {...rest}>{textLabel}</StyledH2>;

H2.defaultProps = {
  height: 44,
  width: 194,
  textLabel: 'Heading 2',
};

addPropertyControls(H2, {
  textLabel: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Heading 2',
  },
});
