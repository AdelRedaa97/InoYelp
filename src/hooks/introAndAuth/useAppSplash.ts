// import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

export const useAppSplash = () => {
  // const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigateToLoginScreen();
      RNBootSplash.hide({fade: true, duration: 500});
    }, 2000);
    return () => {
      RNBootSplash.hide({fade: true, duration: 500});
    };
  }, []);

  // const navigateToLoginScreen = () => {
  //   navigation.dispatch(
  //     CommonActions.reset({
  //       index: 0,
  //       routes: [{name: R_Login}],
  //     }),
  //   );
  // };
};
