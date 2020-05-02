import Icon from '../../baseui/icon/delete-alt';
import * as React from 'react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const DeleteAlt = withIcon(Wrapper);
