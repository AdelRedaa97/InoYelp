import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from 'react';
import {useColorScheme} from 'react-native';
import {
  IThemeContext,
  IThemeProviderProps,
  TThemeMode,
} from '../definitions/theme/ITheme';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export const ThemeContext = createContext<IThemeContext>({theme: lightTheme});

const ThemeProvider = ({
  themeMode,
  children,
}: IThemeProviderProps): JSX.Element => {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useState<TThemeMode>('light');

  useEffect(() => {
    setMode(themeMode);
    return () => {};
  }, [themeMode]);

  const theme = useMemo(() => {
    switch (mode) {
      case 'system': {
        if (colorScheme && colorScheme === 'dark') {
          return darkTheme;
        } else {
          return lightTheme;
        }
      }
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
    }
  }, [mode, colorScheme]);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export default React.memo(ThemeProvider);

export const useThemeProvider = () => {
  const {theme} = useContext(ThemeContext);
  return {theme};
};
