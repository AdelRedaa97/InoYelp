import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {useThemeProvider} from '../../theme/ThemeProvider';
import typography from '../../theme/typography';
const SCREEN_WIDTH = Dimensions.get('window').width;

interface IShow {
  message: string;
}

export type ToastRef = {
  show: ({message}: IShow) => void;
};

const Toast = forwardRef<ToastRef, {}>(({}, ref) => {
  const {colors} = useThemeProvider().theme;

  const [fadeAnim] = useState(new Animated.Value(0));

  const DURATION = 1500;

  const [toastMessage, setToastMessage] = useState('');

  useImperativeHandle(ref, () => ({
    show: ({message}: IShow): void => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      });
      setToastMessage(message);
      showToast();
    },
  }));

  const showToast = useCallback(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(DURATION),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <View
        style={{...styles.toast, backgroundColor: colors.toastBackgroundColor}}>
        <Text style={{...styles.toastText, color: colors.toastTextColor}}>
          {toastMessage}
        </Text>
      </View>
    </Animated.View>
  );
});

export default Toast;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: '10%',
    alignItems: 'center',
  },
  toast: {
    borderRadius: 20,
    padding: 16,
  },
  toastText: {
    fontSize: typography.fontSize.fs16,
    textAlign: 'center',
  },
});
