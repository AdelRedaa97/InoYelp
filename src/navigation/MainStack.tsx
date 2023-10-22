import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import {R_AppSplash, R_LandingScreen} from './AppScreens';

import AppSplash from './../screens/introAndAuth/appSplash/AppSplash';
import LandingScreen from '../screens/home/landingScreen/LandingScreen';

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={R_AppSplash}
      screenOptions={{headerBackTitleVisible: false}}>
      {/** intro and auth **/}
      <Stack.Screen
        options={{headerShown: false}}
        name={R_AppSplash}
        component={AppSplash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={R_LandingScreen}
        component={LandingScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
