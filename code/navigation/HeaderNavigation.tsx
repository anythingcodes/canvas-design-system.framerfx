import * as React from 'react';
import * as System from 'baseui/header-navigation';
import {StatefulSelect as Search, TYPE} from 'baseui/select';
import {StyledLink as Link} from 'baseui/link';
import {ControlType, PropertyControls, addPropertyControls} from 'framer';
import {withHOC} from '../withHOC';
import {omit} from '../utils/omit';
import {ThemePropertyControl, ItemPropertyControlDescription} from '../utils/PropertyControls';

const excludedProps = [
  'willChangeTransform',
  'leftItems',
  'centerItems',
  'rightItems',
  'searchEnabled',
  'searchItems',
  'searchPlaceholder',
  'searchAlignment',
  'searchWidth',
  'defaultSearchItem',
];

type valueOf<T> = T[keyof T];

const InnerHeaderNavigation: React.SFC = props => {
  const renderItems = React.useCallback(
    (items: string[], alignment: valueOf<System.ALIGN>) => {
      return (
        <>
          <System.StyledNavigationList $align={alignment}>
            {(items || []).map((item, index) => (
              <System.StyledNavigationItem key={index}>
                <Link>{item}</Link>
              </System.StyledNavigationItem>
            ))}
          </System.StyledNavigationList>
          {props.searchEnabled && props.searchAlignment === alignment && (
            <System.StyledNavigationList $align={props.searchAlignment}>
              <System.StyledNavigationItem style={{width: `${props.searchWidth}px`}}>
                <Search
                  options={props.searchItems.map((item, index) => ({
                    id: index,
                    value: item,
                  }))}
                  initialState={
                    props.defaultSearchItem && {
                      value: {
                        // @ts-ignore
                        id: -1,
                        value: props.defaultSearchItem,
                      },
                    }
                  }
                  type={TYPE.search}
                  getOptionLabel={props => (props.option && props.option.value ? props.option.value : null)}
                  labelKey={'value'}
                  valueKey={'id'}
                  placeholder={props.searchPlaceholder}
                  maxDropdownHeight={'300px'}
                />
              </System.StyledNavigationItem>
            </System.StyledNavigationList>
          )}
        </>
      );
    },
    [props.searchEnabled, props.searchItems, props.searchPlaceholder, props.searchAlignment, props.defaultSearchItem],
  );

  return (
    <System.HeaderNavigation {...omit(props, excludedProps)}>
      {renderItems(props.leftItems, System.ALIGN.left)}
      {renderItems(props.centerItems, System.ALIGN.center)}
      {renderItems(props.rightItems, System.ALIGN.right)}
    </System.HeaderNavigation>
  );
};

export const HeaderNavigation = withHOC(InnerHeaderNavigation);

HeaderNavigation.defaultProps = {
  width: 459,
  height: 72,
};

addPropertyControls(HeaderNavigation, {
  leftItems: {
    ...ItemPropertyControlDescription,
    title: 'Left Items',
    defaultValue: ['Uber'],
  },
  centerItems: {
    ...ItemPropertyControlDescription,
    title: 'Center Items',
  },
  rightItems: {
    ...ItemPropertyControlDescription,
    title: 'Right Items',
  },
  searchEnabled: {
    type: ControlType.Boolean,
    title: 'Search Enabled',
    defaultValue: false,
  },
  searchItems: {
    ...ItemPropertyControlDescription,
    title: 'Search Items',
    defaultValue: ['First Item', 'Second Item'],
    hidden: props => !props.searchEnabled,
  },
  searchPlaceholder: {
    type: ControlType.String,
    title: 'Search Placeholder',
    defaultValue: 'Search for something...',
    hidden: props => !props.searchEnabled,
  },
  searchAlignment: {
    title: 'Search Alignment',
    type: ControlType.SegmentedEnum,
    defaultValue: 'flex-end',
    options: ['flex-start', 'center', 'flex-end'],
    optionTitles: ['Left', 'Center', 'Right'],
    hidden: props => !props.searchEnabled,
  },
  searchWidth: {
    title: 'Search Field Width',
    type: ControlType.Number,
    defaultValue: 200,
    min: 0,
    step: 25,
    displayStepper: true,
    hidden: props => !props.searchEnabled,
  },
  defaultSearchItem: {
    title: 'Search Item',
    type: ControlType.String,
    hidden: props => !props.searchEnabled,
  },
});
