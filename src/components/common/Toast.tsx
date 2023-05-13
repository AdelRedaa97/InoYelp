import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

interface IShow {
  message: string;
}

const Toast = forwardRef(({}, ref) => {
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
      <View style={styles.toast}>
        <Text style={styles.toastText}>{toastMessage}</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 20,
    padding: 16,
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
