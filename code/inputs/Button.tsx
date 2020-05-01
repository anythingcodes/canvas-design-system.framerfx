import * as React from 'react';
import {cloneElement, useState} from 'react';
import styled, {css} from 'styled-components';
import * as System from 'baseui/button';
import {addPropertyControls, ControlType, PropertyControls} from 'framer';
import {Modal, ModalHeader, ModalBody} from 'baseui/modal';
import {controls, merge} from '../generated/Button';
import {withHOC} from '../withHOC';
import {RawIcons} from '../icons/utils';
import {isModal} from '../surfaces/Modal';
import {pick} from '../utils/pick';
import {colors} from '../canvas';

const StyledButton = styled.button`
    font-family: 'AvenirNext-DemiBold'; // TODO: pull out font from user selection
    cursor: pointer;
    line-height: 1;
    font-size: 14px;
    transition: all .15s ease-out;
    font-smoothing: auto;
    display: inline-block;

    // Buttons
    ${({use}) =>
      use &&
      !use.includes('link') &&
      css`
        -webkit-appearance: button;
        border-radius: 3px;
        padding: 12px 24px;
        white-space: nowrap;
        border-radius: 0.1875rem;
        border: 1px solid ${colors.Lorax};
        text-shadow: 0 0 1px transparent;
      `}

    // Links
    ${({use}) =>
      use &&
      use.includes('link') &&
      css`
        -webkit-appearance: none;
        font-weight: normal;
      `}

    // Primary button
    ${({use}) =>
      use === 'primary' &&
      css`
        color: ${colors.Olaf};
        background-color: ${colors.Lorax};
        &:hover {
          background-color: ${colors.BUTTON_PRIMARY_HOVER_FILL};
        }
        &:active {
          background-color: ${colors['Lorax Dark']};
          border-color: ${colors['Lorax Dark']};
        }
      `}

    // TODO: replace
    &.hidden {
        opacity: 0;
    }

    ${({use}) =>
      use === 'secondary' &&
      css`
        background-color: ${colors.Olaf};
        border-color: ${colors.Lorax};
        color: ${colors.Lorax};
      `}
    ${({disabled}) =>
      disabled &&
      css`
        opacity: 0.3;
        pointer-events: none;
      `}
`;

const InnerButton: React.SFC<any> = ({
  willChangeTransform: _,
  __slotKeys: __,
  children: targetModal,
  containsIcon,
  icon,
  iconLocation,
  iconSize,
  textLabel,
  ...props
}) => {
  let modalContent;
  let modalProps;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enhancerFunction =
    RawIcons[icon] && containsIcon
      ? () => {
          const Icon = RawIcons[icon];
          return <Icon size={iconSize} />;
        }
      : undefined;

  const enhancer = iconLocation === 'left' ? {startEnhancer: enhancerFunction} : {endEnhancer: enhancerFunction};

  const modal = targetModal.length > 0 ? targetModal[0] : null;

  if (modal) {
    const modalContentProps = {
      ...modal.props,
      style: {
        top: 0,
        left: 0,
        width: '100%',
        position: 'relative',
      },
    };

    if (isModal(modal)) {
      // this will force the modal to render a fragment, instead of a Frame-wrapped element
      modalContentProps.standalone = false;

      // pick modal props from the target modal
      modalProps = pick(modal.props.children[0].props, ['animate', 'autofocus', 'closeable', 'role', 'size']);
    }

    modalContent = cloneElement(modal, modalContentProps);
  }

  const handleClick = () => {
    if (modal) {
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledButton {...props}>
      <System.Button onClick={handleClick} {...enhancer} $as={props.use.includes('link') ? 'a' : 'button'}>
        {textLabel}
      </System.Button>
      {modal && (
        <Modal {...modalProps} onClose={handleClose} isOpen={isModalOpen} mountNode={document.body}>
          {modalContent}
        </Modal>
      )}
    </StyledButton>
  );
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 112,
  height: 44,
};

export const ButtonPropertyControls: PropertyControls = {
  use: {
    type: ControlType.Enum,
    defaultValue: 'primary',
    options: ['link', 'link-dark', 'primary', 'secondary', 'tertiary', 'tertiary-light', 'destructive'],
    optionTitles: [
      'Link to another page',
      'Link to another page (on dark)',
      'Primary, most frequent page action',
      'Alternate action',
      'Tertiary action',
      'Tertiary action (light)',
      'Deleting, disconnecting, or other unrevertable actions',
    ],
  },
  textLabel: {
    title: 'Label',
    type: ControlType.String,
    defaultValue: 'Continue',
  },
  disabled: merge(controls.disabled, {}),
  isLoading: merge(controls.isLoading, {}),
  isSelected: merge(controls.isSelected, {}),
  size: merge(controls.size, {}),
  containsIcon: {
    type: ControlType.Boolean,
    title: 'Icon',
    defaultValue: false,
  },
  icon: {
    type: ControlType.Enum,
    title: 'Select Icon',
    options: ['none', ...Object.keys(RawIcons)],
    defaultValue: 'none',
    hidden: props => !props.containsIcon,
  },
  iconSize: {
    type: ControlType.Number,
    title: 'Icon Size',
    defaultValue: 16,
    hidden: props => !props.containsIcon,
  },
  iconLocation: {
    type: ControlType.Enum,
    title: 'Icon Location',
    options: ['left', 'right'],
    defaultValue: 'left',
    hidden: props => !props.containsIcon,
  },
  children: {
    type: ControlType.ComponentInstance,
    title: 'Opens Modal',
  },
};

addPropertyControls(Button, ButtonPropertyControls);
