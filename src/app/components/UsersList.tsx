import { use } from 'react';
import { Users } from '@/types/users';
import { UserCard } from '@/components/UserCard';

export function UsersList({ users }: { users: Promise<Users> }) {
  const allUsers = use(users);

  return (
    <ul className='flex flex-col justify-between h-full'>
      {allUsers.users.slice(0, 3).map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </ul>
  );
}
