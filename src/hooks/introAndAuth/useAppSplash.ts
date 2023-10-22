import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {R_LandingScreen} from '../../navigation/AppScreens';

export const useAppSplash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigateToLandingScreen();
      RNBootSplash.hide({fade: true, duration: 500});
    }, 2000);
    return () => {
      RNBootSplash.hide({fade: true, duration: 500});
    };
  }, []);

  const navigateToLandingScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: R_LandingScreen}],
      }),
    );
  };
};
