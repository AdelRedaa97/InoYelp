import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ICText} from '../../definitions/components/ICText';
import {useThemeProvider} from '../../theme/ThemeProvider';
import typography from '../../theme/typography';

const CText = ({style, children, ...props}: ICText) => {
  const {colors} = useThemeProvider().theme;

  return (
    <Text
      {...props}
      style={{color: colors.primaryTextColor, ...styles.defaultStyle, ...style}}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: typography.fontSize.fs14,
    fontFamily: typography.fontFamily.Tajawal_Regular,
    textAlign: 'left',
  },
});
