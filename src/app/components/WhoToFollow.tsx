import { getUsers } from '@/services/users';
import { Suspense } from 'react';
import { UsersList } from '@/components/UsersList';

export function WhoToFollow() {
  const users = getUsers();

  return (
    <article className='flex flex-col gap-6 rounded-xl border border-white/40 w-full h-[350px] px-4 py-4'>
      <h3 className='text-white text-xl'>Who to Follow</h3>

      <Suspense fallback={<div>Loading...</div>}>
        <UsersList users={users} />
      </Suspense>

      <span>See more</span>
    </article>
  );
}
