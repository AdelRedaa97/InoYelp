import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Grid({color}: {color?: string}) {
  return (
    <Svg width={24} height={24} fill={color || '#000'} viewBox="0 0 256 256">
      <Path d="M108 36H48a12 12 0 00-12 12v60a12 12 0 0012 12h60a12 12 0 0012-12V48a12 12 0 00-12-12zM96 96H60V60h36zM208 36h-60a12 12 0 00-12 12v60a12 12 0 0012 12h60a12 12 0 0012-12V48a12 12 0 00-12-12zm-12 60h-36V60h36zM108 136H48a12 12 0 00-12 12v60a12 12 0 0012 12h60a12 12 0 0012-12v-60a12 12 0 00-12-12zm-12 60H60v-36h36zM208 136h-60a12 12 0 00-12 12v60a12 12 0 0012 12h60a12 12 0 0012-12v-60a12 12 0 00-12-12zm-12 60h-36v-36h36z" />
    </Svg>
  );
}

export default Grid;
