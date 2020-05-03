import Icon from './node_modules/baseui/icon/triangle-upgle-up';
import * as React from './node_modules/react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const TriangleUp = withIcon(Wrapper);
