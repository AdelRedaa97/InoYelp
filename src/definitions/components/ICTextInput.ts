import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  ViewStyle,
} from 'react-native';

export interface ICTextInput {
  testID?: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onEndEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
  style?: ViewStyle;
  valueColor?: string;
  placeholderColor?: string;
  textAlign?: 'right' | 'left' | 'center';
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
  disabled?: boolean;
  keyboardType?: 'default' | 'number-pad';
  secureTextEntry?: boolean;
  maxLength?: undefined | number;
  multiline?: boolean;
}
