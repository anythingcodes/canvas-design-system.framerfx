import {Button} from '../../baseui/button';
import * as System from '../../baseui/card';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {controls, merge} from '../generated/Card';
import {ButtonPropertyControls} from '../inputs/Button';
import {omit} from '../../utils/omit';
import {ThemePropertyControl} from '../../utils/PropertyControls';
import {withHOC} from '../withHOC';

const excludedProps = [
  '__serverResources',
  '__slotKeys',
  'willChangeTransform',
  'buttonText',
  'bodyText',
  'buttonKind',
];

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const InnerCard: React.SFC<any> = props => {
  return (
    <System.Card {...omit(props, excludedProps)} style={style}>
      {props.bodyText && <System.StyledBody>{props.bodyText}</System.StyledBody>}
      {props.buttonText && (
        <System.StyledAction>
          <Button kind={props.buttonKind} overrides={{BaseButton: {style: {width: '100%'}}}}>
            {props.buttonText}
          </Button>
        </System.StyledAction>
      )}
    </System.Card>
  );
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 350,
  height: 250,
};

addPropertyControls(Card, {
  headerImage: merge(controls.headerImage, {
    type: ControlType.Image,
  }),
  thumbnail: merge(controls.thumbnail, {
    type: ControlType.Image,
  }),
  title: merge(controls.title, {defaultValue: 'Card'}),
  bodyText: {
    title: 'Body Text',
    type: ControlType.String,
    defaultValue:
      'Cards are a self-contained unit of information, usually as part of a feed or series of similar content. Cards have a dynamic range of modifiers that allow text-only, text and illustration, and photography.',
  },
  buttonText: {
    title: 'Button Text',
    type: ControlType.String,
    defaultValue: 'Sounds great!',
  },
  buttonKind: {
    ...ButtonPropertyControls.kind,
    title: 'Button Kind',
  },
});
