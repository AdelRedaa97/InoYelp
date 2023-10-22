import {ImageProps, ImageSourcePropType, ImageStyle} from 'react-native';

export interface ICImage extends ImageProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
  resizeMethod?: 'auto' | 'resize' | 'scale';
  onPress?: () => void;
}
