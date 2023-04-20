import {ILanguage} from '../i18n/ILanguage';
import {TThemeMode} from '../theme/ITheme';

export interface IAppSettingsReducer {
  theme: TThemeMode;
  language: ILanguage;
}

export interface IAppSettingsAction {
  type: string;
  payload: {
    theme?: TThemeMode;
    language?: ILanguage;
  };
}
