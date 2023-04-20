import {useState, useEffect} from 'react';

import './../i18n';
import languages, {defaultLanguage} from '../i18n/languages';
import {IApplicationState} from '../definitions/redux/IApplicationState';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ILanguage} from '../definitions/i18n/ILanguage';

export const useLanguageLoader = (): boolean => {
  const {i18n} = useTranslation();
  const {language} = useSelector(
    (state: IApplicationState) => state.appSettingsReducer,
  );

  const [languageLoaded, setLanguageLoaded] = useState(false);

  const changeLanguageAndDirections = () => {
    let savedLanguage: ILanguage =
      languages.find(o => o.code === language.code) || defaultLanguage;

    i18n.changeLanguage(savedLanguage.code).then(() => {
      if (savedLanguage.isRTL && !I18nManager.isRTL) {
        // saved lang is rtl ?
        I18nManager.allowRTL(true); // force allow rtl
        I18nManager.forceRTL(true); // force rtl
        RNRestart.Restart(); // restart
      } else if (!savedLanguage.isRTL && I18nManager.isRTL) {
        // saved lang is not rtl ?
        I18nManager.forceRTL(false); // force disallow rtl
        I18nManager.allowRTL(false); // force disable rtl
        RNRestart.Restart(); // restart
      } else {
        setLanguageLoaded(true);
      }
    });
  };

  useEffect(() => {
    if (language) {
      setTimeout(() => {
        changeLanguageAndDirections();
      }, 250);
    }
  }, [language]);

  return languageLoaded;
};
