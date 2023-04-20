import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

import ThemeProvider from '../theme/ThemeProvider';
import {useSelector} from 'react-redux';
import {IApplicationState} from '../definitions/redux/IApplicationState';
import {useLanguageLoader} from '../i18n/useLanguageLoader';

const AppNavigationContainer = () => {
  const {theme} = useSelector(
    (state: IApplicationState) => state.appSettingsReducer,
  );

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
