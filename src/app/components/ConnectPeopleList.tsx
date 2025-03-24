import { Users } from '@/types/users';
import { use } from 'react';
import { UserCardConnect } from '@/components/UserCardConnect';

export function ConnectPeopleList({ users }: { users: Promise<Users> }) {
  const allUsers = use(users);

  return (
    <ul className='flex flex-col gap-4 w-full px-4 py-2'>
      {allUsers.users.map((user) => (
        <UserCardConnect key={user.id} {...user} />
      ))}
    </ul>
  );
}
