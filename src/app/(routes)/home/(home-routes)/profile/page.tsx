/* eslint-disable @next/next/no-img-element */

import { GetVerifiedButton } from '@/components/GetVerifiedButton';
import { Balloon } from '@/icons/Balloon';
import { Calendar } from '@/icons/Calendar';
import { LeftArrow } from '@/icons/LeftArrow';
import Link from 'next/link';

export default function Profile() {
  return (
    <div className='flex flex-col relative'>
      <header className='flex items-center gap-x-6 px-4 py-2 w-full'>
        <Link
          href={'/home'}
          className='hover:bg-white/10 rounded-full px-1 py-1'
        >
          <LeftArrow className='text-white' />
        </Link>

        <div className='flex flex-col'>
          <h2 className='text-white text-2xl font-semibold'>Inaki</h2>
          <small className='text-[#71767B] text-sm'>200 posts</small>
        </div>
      </header>

      <div className='w-full h-[250px] bg-white'></div>

      <img
        src='/assets/me.jpeg'
        alt='me'
        className='rounded-full w-36 h-36 border-2 border-black absolute top-64 left-8 object-cover'
      />

      <button className='absolute top-84 right-8 rounded-full text-white font-semibold border border-cyan-500 px-4 py-2 bg-transparent cursor-pointer'>
        Edit profile
      </button>

      <div className='flex flex-col gap-4 w-full px-4 py-2 mt-24'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <h2 className='text-white text-2xl font-semibold'>Inaki</h2>

            <GetVerifiedButton />
          </div>
          <small className='text-[#71767B] text-base'>@InakiDev</small>
        </div>

        <div className='flex items-center gap-4 w-full'>
          <span className='flex items-center gap-x-2 text-[#71767B] text-sm'>
            <Balloon />
            Born june 30, 2005
          </span>

          <span className='flex items-center gap-x-2 text-[#71767B] text-sm'>
            <Calendar />
            Joined November 2020
          </span>
        </div>

        <div className='flex items-center gap-6 w-full'>
          <p className='text-white font-semibold flex items-center gap-x-2'>
            200<span className='text-[#71767B] font-light'>Following</span>
          </p>
          <p className='text-white font-semibold flex items-center gap-x-2'>
            45<span className='text-[#71767B] font-light'>Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
}
