import * as React from 'react';
import {StyleObject} from 'styletron-react';
import {Theme} from 'baseui/theme'; // TODO: replace

type StyleOverride<T> = StyleObject | ((props: {$theme: Theme} & React.PropsWithChildren<T>) => StyleObject);

interface OverrideObject<T> {
  component?: React.ComponentType<T>;
  props?: any;
  style?: StyleOverride<T>;
}

export type Override<T> = OverrideObject<T> | React.ComponentType<T>;

export interface Overrides<T> {
  [key: string]: Override<T>;
}
