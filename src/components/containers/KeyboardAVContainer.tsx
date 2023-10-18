import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {IKeboardAVContainer} from '../../definitions/components/IKeboardAVContainer';

const KeyboardAVContainer = ({
  testID,
  style,
  children,
}: IKeboardAVContainer) => {
  return (
    <KeyboardAvoidingView
      testID={testID}
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'android' ? 48 : 100}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{...styles.svContainerStyle, ...style}}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAVContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svContainerStyle: {
    flexGrow: 1,
  },
});
