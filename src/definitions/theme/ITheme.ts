import lightTheme from '../../theme/lightTheme';

export type TThemeMode = 'system' | 'light' | 'dark';

export interface IThemeContext {
  theme: typeof lightTheme;
}

export interface IThemeProviderProps {
  themeMode: TThemeMode;
  children: React.ReactNode;
}
