import * as System from '../../baseui/typography';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {withHOC} from '../withHOC';
import {TextPropertyControl, ColorPropertyControl} from '../../utils/PropertyControls';

const InnerH3: React.SFC<any> = ({text, ['children']: _, willChangeTransform: __, ...props}) => {
  return <System.H3 {...props}>{text}</System.H3>;
};

export const H3 = withHOC(InnerH3);

H3.defaultProps = {
  width: 215,
  height: 90,
};

addPropertyControls(H3, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
});
