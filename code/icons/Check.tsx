import Icon from '../../baseui/icon/check';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const Check = withIcon(Wrapper);
