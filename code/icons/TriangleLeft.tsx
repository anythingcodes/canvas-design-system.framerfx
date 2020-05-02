import Icon from '../../baseui/icon/triangle-left';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const TriangleLeft = withIcon(Wrapper);
