import * as System from 'baseui/tabs';
import {addPropertyControls, ControlType, RenderTarget, Frame} from 'framer';
import * as React from 'react';
import {cloneElement, createElement, useMemo, useEffect, useCallback} from 'react';
import {controls, merge} from '../generated/Tabs';
import {useManagedState} from '../utils/useManagedState';
import {placeholderState} from '../utils/placeholderState';
import {withHOC} from '../withHOC';

const InnerTabs: React.SFC<any> = ({content, activeKey: defaultActiveKey, ...props}) => {
  const [activeKey, setActiveKey] = useManagedState(String(defaultActiveKey));
  const tabs = useMemo(() => {
    return content.map((tab, i) => (
      <System.Tab title={tab.props.name} key={String(i)}>
        {cloneElement(tab, {
          ...tab.props,
          style: {
            position: 'relative',
          },
        })}
      </System.Tab>
    ));
  }, [content]);

  const onChange = useCallback(({activeKey}) => {
    setActiveKey(String(activeKey));
  }, []);

  useEffect(() => setActiveKey(String(defaultActiveKey)), [defaultActiveKey]);

  return content.length === 0 &&
    (RenderTarget.current() === RenderTarget.canvas || RenderTarget.current() === RenderTarget.thumbnail) ? (
    createElement(placeholderState, {
      title: 'No tabs',
      label: 'Add tabs by connecting them on the Canvas',
    })
  ) : (
    <Frame size="100%" background="transparent" style={{overflow: 'hidden'}}>
      <System.Tabs onChange={onChange} {...props} activeKey={activeKey}>
        {tabs}
      </System.Tabs>
    </Frame>
  );
};

export const Tabs = withHOC(InnerTabs);

Tabs.defaultProps = {
  width: 500,
  height: 200,
};

addPropertyControls(Tabs, {
  activeKey: merge(controls.activeKey, {
    defaultValue: 0,
    type: ControlType.Number,
    min: 0,
    step: 1,
    displayStepper: true,
  }),
  renderAll: merge(controls.renderAll, {}),
  disabled: merge(controls.disabled, {}),
  orientation: merge(controls.orientation, {}),
  content: {
    title: 'Tabs',
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
    defaultValue: [],
  },
});
