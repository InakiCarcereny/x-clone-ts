/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Button';
import { Balloon } from '@/icons/Balloon';
import { Clip } from '@/icons/Clip';
import { LeftArrow } from '@/icons/LeftArrow';
import { Location } from '@/icons/Location';
import { getUsers } from '@/services/users';
import { User, Users } from '@/types/users';
import Link from 'next/link';

export default async function UserProfile({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const user = (await getUsers()) as Users;

  const filteredUser = user.users.filter(
    (user: User) => user.username === userId,
  );

  return (
    <>
      {filteredUser.length > 0 && (
        <div className='flex flex-col relative' key={filteredUser[0].id}>
          <header className='flex items-center gap-x-6 px-4 py-2 w-full'>
            <Link
              href={'/home'}
              className='hover:bg-white/10 rounded-full px-1 py-1'
            >
              <LeftArrow className='text-white' />
            </Link>

            <div className='flex flex-col'>
              <h2 className='text-white text-2xl font-semibold'>
                {filteredUser[0].firstName} {filteredUser[0].lastName}
              </h2>
              <small className='text-[#71767B] text-sm'>200 posts</small>
            </div>
          </header>

          <img
            src={filteredUser[0].image}
            alt={filteredUser[0].firstName}
            className='w-full h-[250px] object-center object-cover'
          />

          <img
            src={filteredUser[0].image}
            alt={filteredUser[0].firstName}
            className='rounded-full w-36 h-36 border-2 border-black absolute top-64 left-4 object-cover bg-black'
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
            className='absolute top-84 right-8'
          />

          <div className='flex flex-col gap-4 w-full px-4 py-2 mt-24'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <div className='flex items-center gap-4'>
                  <h2 className='text-white text-2xl font-semibold'>
                    {filteredUser[0].firstName} {filteredUser[0].lastName}
                  </h2>
                </div>
                <small className='text-[#71767B] text-base'>
                  @{filteredUser[0].username}
                </small>
              </div>

              <p className='text-white text-sm font-semibold'>
                I work in {filteredUser[0].company.name}, Im{' '}
                {filteredUser[0].age} years old
              </p>
            </div>

            <div className='flex items-center gap-4 w-full'>
              <span className='flex items-center gap-x-1 text-[#71767B] text-xs'>
                <Location />
                {filteredUser[0].address.city}
              </span>

              <span className='flex items-center gap-x-1 text-[#1d9bf0] text-xs hover:underline hover:underline-offset-1'>
                <Clip />
                {filteredUser[0].company.name}
              </span>

              <span className='flex items-center gap-x-1 text-[#71767B] text-xs'>
                <Balloon />
                {filteredUser[0].birthDate}
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
      )}
    </>
  );
}
