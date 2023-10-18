import {StatusBarStyle, ViewStyle} from 'react-native/types';

export interface IScreenContainer {
  testID?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
  hasStatusBar?: boolean;
  statusBarBackgroundColor?: string;
  StatusBarStyle?: StatusBarStyle;
  header?: () => React.ReactNode;
  disableBottomSafeAreaView?: boolean;
}
