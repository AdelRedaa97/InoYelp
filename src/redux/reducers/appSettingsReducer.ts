import {APPSETTINGS_SET_LANGUAGE, APPSETTINGS_SET_THEME} from '../types';
import {
  IAppSettingsReducer,
  TAppSettingsAction,
} from '../../definitions/redux/IAppSettings';
import {defaultLanguage} from '../../i18n/languages';

const initialState: IAppSettingsReducer = {
  theme: 'light',
  language: defaultLanguage,
};

export default (state = initialState, action: TAppSettingsAction) => {
  switch (action.type) {
    case APPSETTINGS_SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };

    case APPSETTINGS_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };

    default:
      return state;
  }
};
