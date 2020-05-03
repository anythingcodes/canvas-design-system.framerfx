import Icon from './node_modules/baseui/icon/plusn/plus';
import * as React from './node_modules/react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const Plus = withIcon(Wrapper);
