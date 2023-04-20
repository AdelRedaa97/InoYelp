import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import {defaultLanguage} from './languages';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage.code, // default language to use
  fallbackLng: defaultLanguage.code,

  ns: ['translation'],
  defaultNS: 'translation',

  compatibilityJSON: 'v3',
  keySeparator: '_', // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
