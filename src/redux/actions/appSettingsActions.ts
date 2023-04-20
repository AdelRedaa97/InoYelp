import {ILanguage} from '../../definitions/i18n/ILanguage';
import {TThemeMode} from '../../definitions/theme/ITheme';
import languages from '../../i18n/languages';
import themes from '../../theme/themes';
import {APPSETTINGS_SET_LANGUAGE, APPSETTINGS_SET_THEME} from '../types';

export const appSettings_setTheme = (theme: TThemeMode) => {
  return async (dispatch: any) => {
    await dispatch({type: APPSETTINGS_SET_THEME, payload: {theme: theme}});
  };
};

export const appSettings_getAvailableThemes = (): TThemeMode[] => {
  return themes;
};

export const appSettings_setLanguage = (language: ILanguage) => {
  return async (dispatch: any) => {
    await dispatch({
      type: APPSETTINGS_SET_LANGUAGE,
      payload: {language: language},
    });
  };
};

export const appSettings_getAvailableLanguages = (): ILanguage[] => {
  return languages;
};
