import React from 'react';
import type { SVGProps } from 'react';

export function Gallery(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='none' stroke='currentColor' strokeWidth={1}>
        <rect width={13} height={13} x={5.5} y={5.5} rx={1}></rect>
        <circle cx={9.5} cy={9.5} r={1}></circle>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m8 16l1.5-2.5L11 16l2.5-4l2.5 4'
        ></path>
      </g>
    </svg>
  );
}
