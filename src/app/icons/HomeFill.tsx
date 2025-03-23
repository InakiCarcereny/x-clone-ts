import React from 'react';
import type { SVGProps } from 'react';

export function HomeFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z'
      ></path>
    </svg>
  );
}
