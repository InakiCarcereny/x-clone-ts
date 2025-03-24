import { User } from '@/types/users';
import Image from 'next/image';

type UserCardProps = Pick<User, 'lastName' | 'firstName' | 'username'>;

export function UserCard({ lastName, firstName, username }: UserCardProps) {
  return (
    <li className='flex items-center justify-between w-full'>
      <div className='flex items-center gap-x-2'>
        <Image
          src={''}
          width={54}
          height={54}
          alt={'user'}
          className='rounded-full'
        />

        <div className='flex flex-col w-full'>
          <small className='text-white text-base font-semibold truncate'>
            {lastName} {firstName}
          </small>
          <span className='text-sm text-[#71767B]'>@{username}</span>
        </div>
      </div>

      <button className='bg-white text-black font-semibold text-sm px-4 py-2 rounded-full'>
        Follow
      </button>
    </li>
  );
}
