import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledH5 = styled.h5`
  font-family: 'AvenirNext-Regular';
  font-weight: 400;
  font-size: 16px;
  color: ${colors.Obsidian};
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
`;

StyledH5.displayName = 'H5';

export const H5 = ({textLabel, ...rest}) => <StyledH5 {...rest}>{textLabel}</StyledH5>;

H5.defaultProps = {
  height: 44,
  width: 194,
  textLabel: 'Heading 5',
};

addPropertyControls(H5, {
  textLabel: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Heading 5',
  },
});
