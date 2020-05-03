import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledH4 = styled.h4`
  font-family: 'AvenirNext-DemiBold';
  font-size: 20px;
  color: ${colors.Obsidian};
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
`;

StyledH4.displayName = 'H4';

export const H4 = ({textLabel, ...rest}) => <StyledH4 {...rest}>{textLabel}</StyledH4>;

H4.defaultProps = {
  height: 44,
  width: 194,
  textLabel: 'Heading 4',
};

addPropertyControls(H4, {
  textLabel: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Heading 4',
  },
});
