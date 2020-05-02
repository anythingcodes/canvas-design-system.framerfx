import * as System from '../../baseui/typography';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {withHOC} from '../withHOC';
import {TextPropertyControl, ColorPropertyControl} from '../../utils/PropertyControls';

const InnerH4: React.SFC<any> = ({text, ['children']: _, willChangeTransform: __, ...props}) => {
  return <System.H4 {...props}>{text}</System.H4>;
};

export const H4 = withHOC(InnerH4);

H4.defaultProps = {
  width: 170,
  height: 88,
};

addPropertyControls(H4, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
});
