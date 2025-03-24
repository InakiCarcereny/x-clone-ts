import React from 'react';
import type { SVGProps } from 'react';

export function LeftArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M20 12H4m0 0l6-6m-6 6l6 6'
      ></path>
    </svg>
  );
}
