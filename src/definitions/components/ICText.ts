import {TextProps, TextStyle} from 'react-native/types';

export interface ICText extends TextProps {
  style?: TextStyle;
  children: any;
}
