import Icon from '../../baseui/icon/chevron-up';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const ChevronUp = withIcon(Wrapper);
