import Icon from '../../baseui/icon/triangle-right';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const TriangleRight = withIcon(Wrapper);
