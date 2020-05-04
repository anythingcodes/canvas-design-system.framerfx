import * as React from 'react';
import {Frame, addPropertyControls, ControlType} from 'framer';
import {Button} from '../Forms/Button';
import {Paragraph} from '../Text/Paragraph';
import {H2} from '../Text/H2';

export function NewCard(props) {
  const {text, buttonText, headingText, onTap, ...rest} = props;

  return (
    <Frame
      {...rest}
      onTap={onTap}
      whileHover={{
        scale: 1.1,
      }}
      background="#fff"
      style={{
        color: '#000',
        fontSize: 16,
        fontWeight: 600,
        overflow: 'hidden',
      }}
    >
      <H2>{headingText}</H2>
      <Paragraph text={text} />
      <Button use="primary">{buttonText}</Button>
    </Frame>
  );
}

NewCard.defaultProps = {
  height: 128,
  width: 240,
  text: 'Get started!',
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(NewCard, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue:
      'Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. Hello Framer! Lorem ipsum dolor sit amet. ',
  },
  // TODO: Heading type selection
  headingText: {
    title: 'Heading Text',
    type: ControlType.String,
    defaultValue: 'My heading',
  },
  buttonText: {
    title: 'Button Text',
    type: ControlType.String,
    defaultValue: 'Continue',
  },
  onTap: {
    type: ControlType.EventHandler,
  },
});
