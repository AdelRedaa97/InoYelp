import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ImageBroken({color, size}: {color?: string; size?: number}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      fill={color || '#000'}
      viewBox="0 0 24 24">
      <Path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5a2 2 0 012-2h14a2 2 0 012 2m-3 6.42l3 3.01V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-6.58l3 2.99 4-4 4 4" />
    </Svg>
  );
}

export default ImageBroken;
