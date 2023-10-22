import React from 'react';
import {View, TextInput, StyleSheet, I18nManager, Platform} from 'react-native';
import {ICTextInput} from '../../definitions/components/ICTextInput';
import {useThemeProvider} from '../../theme/ThemeProvider';

const CTextInput = ({
  testID,
  value = '',
  placeholder = '',
  onChangeText = (text: string) => text,
  onEndEditing = () => {},
  onSubmitEditing = () => {},
  style = {},
  valueColor,
  placeholderColor,
  textAlign = I18nManager.isRTL ? 'right' : 'left',
  renderLeft,
  renderRight,
  disabled = false,
  keyboardType = 'default',
  secureTextEntry = false,
  maxLength = undefined,
  multiline = false,
}: ICTextInput) => {
  const {colors} = useThemeProvider().theme;

  const valueColorDefault = valueColor || colors.primaryTextColor;
  const placeholderColorDefault = placeholderColor || colors.secondaryTextColor;

  const onChangeTextValidator = (text: string) => {
    if (text.length === 1 && text === ' ') {
      return;
    }
    if (text.length > 1 && text.slice(-2) === '  ') {
      return;
    }
    onChangeText(text);
  };

  return (
    <View
      style={{
        ...styles.defaultInputStyle,
        ...style,
        backgroundColor: colors.primaryBackgroundColor,
        borderColor: colors.textInputBorderColor,
        ...(disabled && {
          backgroundColor: colors.textInputDisabledColor,
        }),
      }}>
      {renderLeft && <View style={styles.pressableLeft}>{renderLeft()}</View>}
      <TextInput
        testID={testID}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeTextValidator}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        // style
        style={{...styles.inputField, color: valueColorDefault}}
        placeholderTextColor={placeholderColorDefault}
        textAlign={textAlign}
        textAlignVertical={multiline ? 'top' : 'center'}
        // options
        editable={!disabled}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        multiline={multiline}
        scrollEnabled={Platform.OS !== 'ios'}
        // default configs
        returnKeyType={'done'}
        textContentType={'oneTimeCode'}
        allowFontScaling={false}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      {renderRight && (
        <View style={styles.pressableRight}>{renderRight()}</View>
      )}
    </View>
  );
};

export default CTextInput;

const styles = StyleSheet.create({
  defaultInputStyle: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  inputField: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    paddingVertical: 0,
    textAlignVertical: 'center',
    backgroundColor: 'transparent',
  },
  pressableLeft: {
    height: '100%',
    marginRight: 12,
    justifyContent: 'center',
  },
  pressableRight: {
    height: '100%',
    marginLeft: 12,
    justifyContent: 'center',
  },
});
