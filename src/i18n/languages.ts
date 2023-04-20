import {ILanguage} from '../definitions/i18n/ILanguage';

const languages: ILanguage[] = [
  {code: 'en', name: 'English', isRTL: false},
  {code: 'ar', name: 'العربية', isRTL: true},
];

export default languages;

export const defaultLanguage = languages[0];
