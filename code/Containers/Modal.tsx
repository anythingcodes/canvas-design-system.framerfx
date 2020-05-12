import * as React from 'react';
import {Children, cloneElement, Fragment} from 'react';
import styled from 'styled-components';
import * as System from '../../baseui/modal';
import {CloseIcon} from '../../baseui/modal/close-icon';
import {H2} from '../Text/H2';
import {addPropertyControls, ControlType, Frame} from 'framer';
import {controls, merge} from '../generated/Modal';
import {withHOC} from '../withHOC';
import {colors} from '../canvas';
import {Button} from '../Forms/Button';

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const InnerModal: React.SFC<any> = ({
  children,
  actions = [],
  title,
  closeable,
  onClose,
  standalone = true,
  ...props
}) => {
  const onCloseClick = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const Wrapper = standalone ? Frame : Fragment;
  const wrapperProps = standalone
    ? {
        ...props,
        background: colors.Olaf,
        borderRadius: '3px',
        overflow: 'hidden',
        style,
      }
    : {};

  const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    background-color: ${colors.Oz};
    background-image: linear-gradient(-303deg, ${colors.Calypso}, #00afb2 56%, ${colors.Oz});
    min-height: 68px;
    padding: 4px 56px 4px 40px;

    h2 {
      font-size: 20px;
      color: ${colors.Olaf};
      font-weight: 600;
      display: block;
      line-height: normal;
      margin-bottom: 0;
    }
  `;

  return (
    <Wrapper {...wrapperProps}>
      <ModalHeader>
        <H2 textLabel={title} />
      </ModalHeader>
      <System.ModalBody>
        {Children.map(children, content =>
          cloneElement(content, {
            ...content.props,
            style: {
              position: 'relative',
            },
          }),
        )}
      </System.ModalBody>
      {actions.length && (
        <System.ModalFooter>
          {actions.map((action, i) => (
            <Button key={action} use={i === 0 ? 'primary' : 'secondary'} textLabel={action} />
          ))}
        </System.ModalFooter>
      )}

      {standalone && closeable && (
        <System.StyledClose onClick={onCloseClick}>
          <CloseIcon />
        </System.StyledClose>
      )}
    </Wrapper>
  );
};

export const Modal = withHOC(InnerModal);

Modal.defaultProps = {
  width: 350,
  height: 250,
};

addPropertyControls(Modal, {
  title: {
    type: ControlType.String,
    title: 'Title',
    defaultValue: 'Title',
  },
  children: {
    type: ControlType.ComponentInstance,
    title: 'Content',
    defaultValue: null,
  },
  animate: merge(controls.animate, {defaultValue: true}),
  autofocus: merge(controls.autofocus, {}),
  closeable: merge(controls.closeable, {defaultValue: true}),
  role: merge(controls.role, {}),
  size: merge(controls.size, {}),
  actions: {
    type: ControlType.Array,
    title: 'Actions',
    defaultValue: ['Cancel', 'Continue'],
    propertyControl: {
      type: ControlType.String,
      title: 'Action',
      defaultValue: 'Action',
    },
  },
});

// Utility functions

export const isModal = element => {
  if ('componentIdentifier' in element.props) {
    const name = element.props.componentIdentifier.slice(element.props.componentIdentifier.lastIndexOf('_') + 1);
    return name === 'Modal';
  }
  return false;
};
