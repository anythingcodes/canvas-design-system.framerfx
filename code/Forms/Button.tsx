import * as React from 'react';
import {cloneElement, useState} from 'react';
import * as System from '../../baseui/button';
import {addPropertyControls, ControlType, PropertyControls} from 'framer';
import {Modal} from '../../baseui/modal';
import {controls, merge} from '../generated/Button';
import {withHOC} from '../withHOC';
import {RawIcons} from '../Icons/utils';
import {isModal} from '../Containers/Modal';
import {pick} from '../../utils/pick';

const InnerButton: React.SFC<any> = ({
  willChangeTransform: _,
  __slotKeys: __,
  children: targetModal,
  containsIcon,
  icon,
  iconLocation,
  iconSize,
  text,
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
    <>
      <System.Button onClick={handleClick} {...props} {...enhancer} $as={props.href ? 'a' : 'button'}>
        {text}
      </System.Button>

      {modal && (
        <Modal {...modalProps} onClose={handleClose} isOpen={isModalOpen} mountNode={document.body}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 87,
  height: 50,
};

export const ButtonPropertyControls: PropertyControls = {
  kind: merge(controls.kind, {}),
  disabled: merge(controls.disabled, {}),
  isLoading: merge(controls.isLoading, {}),
  isSelected: merge(controls.isSelected, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {}),
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Button',
  },
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
