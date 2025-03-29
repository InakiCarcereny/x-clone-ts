'use client';

/* eslint-disable @next/next/no-img-element */

import { EditProfileButton } from '@/components/EditProfileButton';
import { GetVerifiedButton } from '@/components/GetVerifiedButton';
import { useUserProfile } from '@/context/user-profile';
import { Balloon } from '@/icons/Balloon';
import { Calendar } from '@/icons/Calendar';
import { Clip } from '@/icons/Clip';
import { LeftArrow } from '@/icons/LeftArrow';
import { Location } from '@/icons/Location';
import Link from 'next/link';

export default function Profile() {
  const { userProfile } = useUserProfile();

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
          <h2 className='text-white text-2xl font-semibold'>
            {userProfile.name}
          </h2>
          <small className='text-[#71767B] text-sm'>200 posts</small>
        </div>
      </header>

      <img
        src={userProfile.banner}
        alt={userProfile.name}
        className='w-full h-[250px]'
      />

      <img
        src={userProfile.avatar}
        alt={userProfile.name}
        className='rounded-full w-36 h-36 border-2 border-black absolute top-64 left-4 object-cover'
      />

      <EditProfileButton />

      <div className='flex flex-col gap-4 w-full px-4 py-2 mt-24'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-4'>
              <h2 className='text-white text-2xl font-semibold'>
                {userProfile?.name}
              </h2>

              <GetVerifiedButton />
            </div>
            <small className='text-[#71767B] text-base'>@InakiDev</small>
          </div>

          <p className='text-white text-sm font-semibold'>{userProfile.bio}</p>
        </div>

        <div className='flex items-center gap-4 w-full'>
          <span className='flex items-center gap-x-1 text-[#71767B] text-xs'>
            <Location />
            {userProfile.location}
          </span>

          <Link
            className='flex items-center gap-x-1 text-[#1d9bf0] text-xs hover:underline hover:underline-offset-1'
            href={userProfile.website}
          >
            <Clip />
            {userProfile.website}
          </Link>

          <span className='flex items-center gap-x-1 text-[#71767B] text-xs'>
            <Balloon />
            Born june 30, 2005
          </span>

          <span className='flex items-center gap-x-1 text-[#71767B] text-xs'>
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
