/**
 * @format
 */
import 'react-native-gesture-handler'; // it should be at the top and there's nothing else before it
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (!__DEV__) {
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.warn = () => {};
}

const HeadlessCheck = ({isHeadless}) => {
  if (isHeadless) {
    return null;
  }
  return <App />;
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
