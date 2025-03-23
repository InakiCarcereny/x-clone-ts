'use client';

import { Dots } from '@/icons/Dots';
import Image from 'next/image';
import { useState } from 'react';

export function InakiDev() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className='flex items-center justify-between mb-2 hover:bg-white/10 px-4 py-2 rounded-full cursor-pointer relative'
      >
        <div className='flex items-center gap-x-2'>
          <Image
            src={'/assets/me.jpeg'}
            width={50}
            height={50}
            alt='me'
            className='rounded-full'
          />
          <div className='flex flex-col'>
            <span className='text-white font-semibold text-md text-start'>
              Iñaki
            </span>
            <small className='text-white/70 font-light text-sm'>
              By @Inaki_Dev
            </small>
          </div>
        </div>

        <Dots className='text-white' />
      </button>

      {open && (
        <div
          style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)' }}
          className='bg-black shadow-white absolute bottom-20 max-w-[260px] w-full px-2 py-1 text-white text-center font-semibold rounded-[4px]'
        >
          Log out
        </div>
      )}
    </>
  );
}
