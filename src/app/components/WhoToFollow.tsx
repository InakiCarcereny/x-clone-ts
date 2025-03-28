import { getUsers } from '@/services/users';
import { Suspense } from 'react';
import { UsersList } from '@/components/UsersList';
import { UserCardSkeleton } from '@/components/UserCardSkeleton';
import { SeeMore } from '@/components/SeeMore';

export function WhoToFollow() {
  const users = getUsers();

  return (
    <article className='flex flex-col gap-6 rounded-xl border border-white/40 w-full h-[350px]'>
      <h3 className='text-white text-xl px-4 pt-4 font-semibold'>
        Who to Follow
      </h3>

      <Suspense
        fallback={
          <ul className='flex flex-col justify-between h-full'>
            {[...Array(3)].map((_, index) => (
              <UserCardSkeleton key={index} />
            ))}
          </ul>
        }
      >
        <UsersList users={users} />
      </Suspense>

      <div className='px-4 pb-2'>
        <SeeMore href='/home/connect-people' />
      </div>
    </article>
  );
}
