import React from 'react';
import type { SVGProps } from 'react';

export function User(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <circle cx={12} cy={6} r={4}></circle>
        <path d='M21 22a1 1 0 0 0-18 0Z'></path>
      </g>
    </svg>
  );
}
