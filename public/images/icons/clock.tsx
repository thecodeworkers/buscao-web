import React from 'react';

const Clock = ({ color }) => (
<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 16 16">
  <defs>
    <clipPath id="clip-path">
      <rect width="16" height="16" fill="none"/>
    </clipPath>
  </defs>
  <g id="Clock" clip-path="url(#clip-path)">
    <path id="Trazado_13" data-name="Trazado 13" d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm9.2,9.2.933-.933L9.2,7.333,8,2H6.667V8a1.21,1.21,0,0,0,.4.933.466.466,0,0,0,.267.133Z" fill={color}/>
  </g>
</svg>

)

export default Clock;
