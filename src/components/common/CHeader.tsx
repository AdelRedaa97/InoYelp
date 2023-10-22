import React from 'react';
import {I18nManager, Pressable, StyleSheet, View} from 'react-native';
import CText from './CText';
import {useNavigation} from '@react-navigation/native';
import {ICHeader} from '../../definitions/components/ICHeader';
import LeftArrow from '../../assets/svgs/LeftArrow';
import typography from '../../theme/typography';
import {useThemeProvider} from '../../theme/ThemeProvider';

const CHeader = ({
  testID,
  style,
  hasTitle = true,
  title,
  titleStyle,
  isTitleCentered = true,
  hasBackButton = true,
  onPressBack,
  renderLeft,
  renderCenter,
  renderRight,
}: ICHeader): JSX.Element => {
  const navigation = useNavigation();
  const {colors} = useThemeProvider().theme;

  return (
    <View
      testID={testID}
      style={{
        ...styles.defaultStyle,
        backgroundColor: colors.primaryBackgroundColor,
        ...style,
      }}>
      {hasBackButton && (
        <Pressable
          onPress={onPressBack ? onPressBack : navigation.goBack}
          style={{
            ...styles.backPressable,
            ...styles.backPressableRTL,
          }}>
          <View style={styles.leftArrow}>
            <LeftArrow color={colors.primaryTextColor} />
          </View>
        </Pressable>
      )}
      {renderLeft && renderLeft()}
      {!hasBackButton && !renderLeft && isTitleCentered && (
        <View style={styles.dummyPressableSize} />
      )}
      {renderCenter && renderCenter()}
      {hasTitle && (
        <CText
          style={{
            ...styles.defaultTitleStyle,
            ...titleStyle,
          }}>
          {title}
        </CText>
      )}
      {renderRight ? renderRight() : <View style={styles.dummyPressableSize} />}
    </View>
  );
};

export default CHeader;

const styles = StyleSheet.create({
  defaultStyle: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backPressable: {
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    marginRight: 16,
  },
  leftArrow: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backPressableRTL: I18nManager.isRTL
    ? {
        transform: [{rotate: '180deg'}],
      }
    : {},
  dummyPressableSize: {
    height: '100%',
    aspectRatio: 1,
    marginLeft: 16,
  },
  defaultTitleStyle: {
    flex: 1,
    fontSize: typography.fontSize.fs18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});
