import Icon from './node_modules/baseui/icon/chevron-leftn-left';
import * as React from './node_modules/react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const ChevronLeft = withIcon(Wrapper);
