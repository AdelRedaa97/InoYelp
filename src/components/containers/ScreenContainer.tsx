import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {IScreenContainer} from '../../definitions/components/IScreenContainer';
import {useThemeProvider} from '../../theme/ThemeProvider';

const ScreenContainer = ({
  testID,
  style,
  children,
  hasStatusBar = true,
  statusBarBackgroundColor,
  StatusBarStyle,
  header,
}: IScreenContainer): JSX.Element => {
  const {colors, primaryStatusbarBarStyle} = useThemeProvider().theme;

  return (
    <View testID={testID} style={styles.parentContainerStyle}>
      {hasStatusBar && (
        <SafeAreaView
          style={{
            backgroundColor:
              statusBarBackgroundColor || colors.primaryHighlightColor,
          }}
        />
      )}
      <StatusBar
        animated={true}
        backgroundColor={
          hasStatusBar
            ? statusBarBackgroundColor || colors.primaryHighlightColor
            : colors.transparent
        } // android: bar backgroundcolor
        barStyle={StatusBarStyle || primaryStatusbarBarStyle} // bar text color [ light-content, dark-content]
        translucent={!hasStatusBar} // android: transparent statusbar
      />
      {header && header()}
      <View
        style={{
          backgroundColor: colors.primaryBackgroundColor,
          ...styles.containerStyle,
          ...style,
        }}>
        {children}
      </View>
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  parentContainerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    paddingBottom: hp(4),
    paddingHorizontal: wp(3),
  },
});
