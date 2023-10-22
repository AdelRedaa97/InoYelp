import {TextStyle, ViewStyle} from 'react-native';

export interface ICHeader {
  testID?: string;
  style?: ViewStyle;
  hasTitle?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  isTitleCentered?: boolean;
  hasBackButton?: boolean;
  onPressBack?: () => void;
  renderLeft?: () => React.ReactNode;
  renderCenter?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
  hasStatusBar?: boolean;
  statusBarBackgroundColor?: string;
}
