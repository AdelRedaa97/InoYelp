import {ILanguage} from '../i18n/ILanguage';
import {TThemeMode} from '../theme/ITheme';

export interface IAppSettingsReducer {
  theme: TThemeMode;
  language: ILanguage;
}

export type TAppSettingsAction = ISetTheme | ISetLanguage;

export interface ISetTheme {
  type: 'APPSETTINGS_SET_THEME';
  payload: {
    theme: TThemeMode;
  };
}

export interface ISetLanguage {
  type: 'APPSETTINGS_SET_LANGUAGE';
  payload: {
    language: ILanguage;
  };
}
