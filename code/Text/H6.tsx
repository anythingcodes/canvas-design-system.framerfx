import * as System from '../../baseui/typography';
import {addPropertyControls} from 'framer';
import * as React from 'react';
import {withHOC} from '../withHOC';
import {TextPropertyControl, ColorPropertyControl} from '../../utils/PropertyControls';

const InnerH6: React.SFC<any> = ({text, ['children']: _, willChangeTransform: __, ...props}) => {
  return <System.H6 {...props}>{text}</System.H6>;
};

export const H6 = withHOC(InnerH6);

H6.defaultProps = {
  width: 108,
  height: 76,
};

addPropertyControls(H6, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
});
