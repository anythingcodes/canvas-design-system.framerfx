import * as React from 'react';
import * as System from '../../baseui/typography';
import {addPropertyControls} from 'framer';
import {withHOC} from '../withHOC';
import {TextPropertyControl, ColorPropertyControl, UseGlobalStatePropertyControls} from '../../utils/PropertyControls';
import {withManagedState} from '../../utils/stateManagement/withManagedState';
import {compose} from '../../utils/compose';

const InnerLabel: React.SFC<any> = ({text, ['children']: _, willChangeTransform: __, ...props}) => {
  return <System.Label {...props}>{text}</System.Label>;
};

export const Label = compose(
  withHOC,
  withManagedState,
)(InnerLabel);

Label.defaultProps = {
  width: 80,
  height: 20,
  valuePropName: 'text',
};

addPropertyControls(Label, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
  ...UseGlobalStatePropertyControls,
});
