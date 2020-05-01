import * as React from 'react';
import {cloneElement} from 'react';
import * as System from 'baseui/modal';
import {CloseIcon} from 'baseui/modal/close-icon';
import {addPropertyControls, ControlType, Frame} from 'framer';
import {controls, merge} from '../generated/Modal';
import {withHOC} from '../withHOC';

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

  const Wrapper = standalone ? Frame : React.Fragment;
  const wrapperProps = standalone ? {...props, background: '#fff', style} : {};

  return (
    <Wrapper {...wrapperProps}>
      <System.ModalHeader>{title}</System.ModalHeader>
      <System.ModalBody>
        {React.Children.map(children, content =>
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
          {actions.map(action => (
            <System.ModalButton key={action}>{action}</System.ModalButton>
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
