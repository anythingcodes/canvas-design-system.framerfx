import * as React from 'react';
import {ThemeProvider} from '../utils/ThemeProvider';
import {addListener} from '../utils/ThemeManagement';

export function withHOC(Component): React.SFC<any> {
  return props => {
    const [currentTheme, setCurrentTheme] = React.useState();

    React.useEffect(() => {
      const unsubscribe = addListener(theme => {
        setCurrentTheme(theme);
      });
      return unsubscribe;
    }, []);

    return (
      <ThemeProvider theme={props.theme === 'inherit' ? currentTheme : props.theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
}
