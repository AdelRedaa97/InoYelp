import {APPSETTINGS_SET_LANGUAGE, APPSETTINGS_SET_THEME} from '../types';
import {
  IAppSettingsReducer,
  IAppSettingsAction,
} from '../../definitions/redux/IAppSettings';
import {defaultLanguage} from '../../i18n/languages';

const initialState: IAppSettingsReducer = {
  theme: 'system',
  language: defaultLanguage,
};

export default (state = initialState, {type, payload}: IAppSettingsAction) => {
  switch (type) {
    case APPSETTINGS_SET_THEME:
      return {
        ...state,
        theme: payload.theme,
      };

    case APPSETTINGS_SET_LANGUAGE:
      return {
        ...state,
        language: payload.language,
      };

    default:
      return state;
  }
};
