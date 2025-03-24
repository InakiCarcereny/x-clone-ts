import { ConnectPeopleList } from '@/components/ConnectPeopleList';
import { UserCardConnectSkeleton } from '@/components/UserCardConnectSkeleton';
import { LeftArrow } from '@/icons/LeftArrow';
import { getUsers } from '@/services/users';
import Link from 'next/link';
import { Suspense } from 'react';

export default function ConnectPeople() {
  const users = getUsers();

  return (
    <>
      <header className='flex items-center gap-x-6 px-4 py-2 border-b border-white/40 w-full'>
        <Link
          href={'/home'}
          className='hover:bg-white/10 rounded-full px-1 py-1'
        >
          <LeftArrow className='text-white' />
        </Link>

        <h2 className='text-white text-2xl font-semibold'>Connect</h2>
      </header>

      <Suspense
        fallback={
          <ul className='flex flex-col gap-4 w-full h-full px-4 py-2'>
            {[
              ...Array(30).map((_, index) => (
                <UserCardConnectSkeleton key={index} />
              )),
            ]}
          </ul>
        }
      >
        <ConnectPeopleList users={users} />
      </Suspense>
    </>
  );
}
