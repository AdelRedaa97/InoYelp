import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

import ThemeProvider from '../theme/ThemeProvider';
import {useLanguageLoader} from '../i18n/useLanguageLoader';
import {useAppSelector} from '../redux/store/store';

const AppNavigationContainer = () => {
  const {theme} = useAppSelector(state => state.appSettingsReducer);

  const languageLoaded = useLanguageLoader();

  return (
    <NavigationContainer>
      <ThemeProvider themeMode={theme}>
        {languageLoaded && <MainStack />}
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
