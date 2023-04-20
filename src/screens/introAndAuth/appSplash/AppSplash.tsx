import React from 'react';
import {Image} from 'react-native';
import {ScreenContainer} from '../../../components';
import {useAppSplash} from '../../../hooks/introAndAuth/useAppSplash';
import {styles} from './styles';

const AppSplash = (): JSX.Element => {
  useAppSplash();

  return (
    <ScreenContainer
      style={{
        ...styles.container,
      }}>
      <Image
        style={styles.loaderImg}
        source={require('./../../../assets/images/logo.png')}
      />
    </ScreenContainer>
  );
};

export default AppSplash;
