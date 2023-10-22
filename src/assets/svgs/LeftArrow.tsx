import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LeftArrow({color}: {color?: string}) {
  return (
    <Svg width={10} height={16} viewBox="0 0 10 16" fill="none">
      <Path
        d="M8.5 15l-7-7 7-7"
        stroke={color || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LeftArrow;
