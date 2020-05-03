import Icon from './node_modules/baseui/icon/delete-altte-alt';
import * as React from './node_modules/react';
import {withIcon} from './withIcon';

const Wrapper: React.SFC = props => {
  return <Icon {...props} />;
};

export const DeleteAlt = withIcon(Wrapper);
