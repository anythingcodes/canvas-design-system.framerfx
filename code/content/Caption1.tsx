import * as React from 'react';
import * as System from '../../baseui/typography';
import {addPropertyControls} from 'framer';
import {withHOC} from '../withHOC';
import {TextPropertyControl, ColorPropertyControl} from '../../utils/PropertyControls';

const InnerCaption: React.SFC<any> = ({text, ['children']: _, willChangeTransform: __, ...props}) => {
  return <System.Caption {...props}>{text}</System.Caption>;
};

export const Caption = withHOC(InnerCaption);

Caption.defaultProps = {
  width: 85,
  height: 20,
};

addPropertyControls(Caption, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
});
