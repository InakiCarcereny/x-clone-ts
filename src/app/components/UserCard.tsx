'use client';

import { User } from '@/types/users';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { useState } from 'react';
import Link from 'next/link';

type UserCardProps = Pick<
  User,
  'lastName' | 'firstName' | 'username' | 'image' | 'university' | 'company'
>;

export function UserCard({
  lastName,
  firstName,
  username,
  image,
  university,
  company,
}: UserCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/home/${username}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='flex items-center justify-between w-full hover:bg-white/10 px-4 py-2 group relative'
    >
      <div className='flex items-center gap-x-2'>
        <Image
          src={image}
          width={40}
          height={40}
          alt={'user'}
          className='rounded-full'
        />

        <div className='flex flex-col w-full'>
          <small className='text-white text-base font-semibold truncate group-hover:underline-offset-1 group-hover:underline'>
            {lastName} {firstName}
          </small>
          <span className='text-sm text-[#71767B]'>@{username}</span>
        </div>
      </div>

      <Button
        label='Follow'
        textSize='text-sm'
        bgColor='bg-white'
        textColor='text-black'
        borderRadius='rounded-full'
        fontWeight='font-semibold'
        paddingX='px-4'
        paddingY='py-2'
        cursor='cursor-pointer'
      />

      {isHovered && (
        <div
          style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)' }}
          className='absolute top-14 right-8 bg-black w-full h-[250px] px-4 py-4 rounded-xl z-50 flex flex-col gap-4'
        >
          <header className='flex items-center justify-between'>
            <Image
              src={image}
              width={40}
              height={40}
              alt={'user'}
              className='rounded-full'
            />

            <Button
              label='Follow'
              textSize='text-sm'
              bgColor='bg-white'
              textColor='text-black'
              borderRadius='rounded-full'
              fontWeight='font-semibold'
              paddingX='px-4'
              paddingY='py-2'
              cursor='cursor-pointer'
            />
          </header>

          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col'>
              <small className='text-white text-base font-semibold truncate group-hover:underline-offset-1 group-hover:underline'>
                {lastName} {firstName}
              </small>
              <span className='text-sm text-[#71767B]'>@{username}</span>
            </div>

            <p className='text-white text-xs truncate'>
              {university} - {company.name}
            </p>

            <div className='flex items-center gap-6'>
              <p className='text-white font-semibold flex items-center gap-x-2 text-xs'>
                200<span className='text-[#71767B] font-light'>Following</span>
              </p>
              <p className='text-white font-semibold flex items-center gap-x-2 text-xs'>
                45<span className='text-[#71767B] font-light'>Followers</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}
