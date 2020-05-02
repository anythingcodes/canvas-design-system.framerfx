import Icon from '../../baseui/icon/arrow-up';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const ArrowUp = withIcon(Wrapper);
