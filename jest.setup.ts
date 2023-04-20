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

// Dimensions => {"fontScale": 1, "height": 844, "scale": 3, "width": 390}
jest.mock('react-native-responsive-screen', () => ({
  heightPercentageToDP: jest.fn((heightPercent: number | string) =>
    typeof heightPercent === 'number'
      ? (heightPercent / 100) * 844
      : (parseFloat(heightPercent) / 100) * 844,
  ),
  widthPercentageToDP: jest.fn((widthPercent: number | string) =>
    typeof widthPercent === 'number'
      ? (widthPercent / 100) * 390
      : (parseFloat(widthPercent) / 100) * 390,
  ),
}));

// hx 34 h1 31 h2 29 h3 26 xlarge 24 large 22 medium 19 small 17 xsmall 14
jest.mock('react-native-responsive-fontsize', () => {
  return {
    RFValue: jest.fn((fontSize: number) => {
      switch (fontSize) {
        case 28:
          return 34;
        case 26:
          return 31;
        case 24:
          return 29;
        case 22:
          return 26;
        case 20:
          return 24;
        case 18:
          return 22;
        case 16:
          return 19;
        case 14:
          return 17;
        case 12:
          return 14;
      }
    }),
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
