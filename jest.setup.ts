import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const originalModule = jest.requireActual('redux-persist');
  return {
    ...originalModule,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: jest.fn(),
  };
});

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(),
  };
});

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

export default {};
