import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledH1 = styled.h1`
  font-family: 'AvenirNext-Bold';
  font-size: 32px;
  color: ${colors.Obsidian};
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
`;

StyledH1.displayName = 'H1';

export const H1 = ({textLabel, ...rest}) => <StyledH1 {...rest}>{textLabel}</StyledH1>;

H1.defaultProps = {
  height: 44,
  width: 194,
  textLabel: 'Heading 1',
};

addPropertyControls(H1, {
  textLabel: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Heading 1',
  },
});
