import * as React from 'react';
import * as System from '../../baseui/typography';
import {addPropertyControls} from 'framer';
import {withHOC} from '../withHOC';
import {TextPropertyControl, ColorPropertyControl} from '../../utils/PropertyControls';

const InnerParagraph: React.SFC<any> = ({text, ['children']: _, willChangeTransform: __, ...props}) => {
  return <System.Paragraph {...props}>{text}</System.Paragraph>;
};

export const Paragraph = withHOC(InnerParagraph);

Paragraph.defaultProps = {
  width: 75,
  height: 33,
};

addPropertyControls(Paragraph, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
});
