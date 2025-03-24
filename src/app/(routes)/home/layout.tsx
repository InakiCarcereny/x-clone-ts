import { ReactNode } from 'react';
import { Explorer } from '@/components/Explorer';
import { Find } from '@/components/Find';
import { PostModal } from '@/components/PostModal';
import { HomeHeaderLayout } from '@/components/HomeHeaderLayout';
import { GetVerifiedModal } from '@/components/GetVerifiedModal';
import { EditProfileModal } from '@/components/EditProfileModal';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='max-w-[1225px] w-full h-full mx-auto flex gap-2'>
        <Explorer />

        <main className='flex flex-col max-w-[600px] w-full h-full border-x border-white/40 overflow-y-auto'>
          <HomeHeaderLayout />

          {children}
        </main>

        <Find />
      </div>

      <PostModal />
      <GetVerifiedModal />
      <EditProfileModal />
    </div>
  );
}
