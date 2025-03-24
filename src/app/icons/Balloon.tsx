import React from 'react';
import type { SVGProps } from 'react';

export function Balloon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='none'>
        <path d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z'></path>
        <path
          fill='currentColor'
          d='M12 2c4.43 0 8 3.66 8 8.059c0 2.505-1.118 4.957-2.601 6.77c-1.008 1.231-2.285 2.283-3.622 2.81l-.287.105l.404.809a1 1 0 0 1-.765 1.439L13 22h-2a1 1 0 0 1-.945-1.328l.05-.12l.405-.808c-1.44-.483-2.829-1.596-3.909-2.916C5.118 15.016 4 12.564 4 10.058C4 5.66 7.57 2 12 2m0 2c-3.302 0-6 2.74-6 6.059c0 1.936.882 3.954 2.149 5.503C9.449 17.15 10.943 18 12 18s2.552-.85 3.851-2.438C17.118 14.013 18 11.995 18 10.059C18 6.74 15.302 4 12 4m1.278 1.181c1.654.479 2.92 1.84 3.448 3.52a1 1 0 1 1-1.908.599c-.352-1.123-1.165-1.928-2.096-2.198a1 1 0 1 1 .556-1.92Z'
        ></path>
      </g>
    </svg>
  );
}
