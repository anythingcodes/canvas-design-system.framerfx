import * as React from './node_modules/react';
import * as System from '../../../baseui/progress-steps';
import {ControlType, PropertyControls, addPropertyControls} from './node_modules/framer';
import {controls, merge} from '../../generated/ProgressSteps';
import {withHOC} from '../../withHOC';
import {ThemePropertyControl} from '../../../utils/PropertyControls';
import {omit} from '../../../utils/omit';

const InnerProgressSteps: React.SFC = props => {
  return (
    <System.ProgressSteps {...omit(props, ['current'])} current={props.current - 1}>
      {props.items.map((item, index) => (
        <System.Step key={index} title={item} />
      ))}
    </System.ProgressSteps>
  );
};

export const ProgressSteps = withHOC(InnerProgressSteps);

ProgressSteps.defaultProps = {
  width: 105,
  height: 107,
};

addPropertyControls(ProgressSteps, {
  items: {
    title: 'Items',
    type: ControlType.Array,
    defaultValue: ['Item 1', 'Item 2'],
    propertyControl: {
      type: ControlType.String,
      defaultValue: 'Item',
    },
  },
  current: merge(controls.current, {
    defaultValue: 1,
    min: 1,
    step: 1,
    displayStepper: true,
  }),
});
