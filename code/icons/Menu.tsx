import Icon from '../../baseui/icon/menu';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const Menu = withIcon(Wrapper);
