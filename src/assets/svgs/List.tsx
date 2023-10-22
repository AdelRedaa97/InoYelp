import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function List({color}: {color?: string}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 6h13M8 12h13M8 18h13M3 6.5h1v-1H3v1zm0 6h1v-1H3v1zm0 6h1v-1H3v1z"
        stroke={color || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default List;
