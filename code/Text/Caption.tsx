import * as React from 'react';
import styled from 'styled-components';
import {addPropertyControls, ControlType} from 'framer';
import {colors} from '../canvas';

const StyledCaption = styled.small`
  font-family: 'Avenir Next';
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: block;
  padding-bottom: 4px;
  color: ${colors.Obsidian};
`;

StyledCaption.displayName = 'Caption';

export const Caption = ({caption, ...rest}) => <StyledCaption {...rest}>{caption}</StyledCaption>;

Caption.defaultProps = {
  height: 44,
  width: 194,
  caption: 'Caption',
};

addPropertyControls(Caption, {
  caption: {
    title: 'Caption',
    type: ControlType.String,
    defaultValue: 'Caption',
  },
});
