import { ReactNode } from 'react';
import { BUTTONS } from '@/lib/buttons';
import { Explorer } from '@/components/Explorer';
import { Find } from '@/components/Find';
import { PostModal } from '@/components/PostModal';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='max-w-[1225px] w-full h-full mx-auto flex gap-2'>
        <Explorer />

        <main className='flex flex-col max-w-[600px] w-full h-full border-x border-white/40'>
          <header className='flex items-center justify-between w-full border border-b-white/40'>
            {BUTTONS.map((button) => (
              <button
                key={button.label}
                className='text-[#71767B] hover:bg-white/10 px-4 py-4 w-full'
              >
                {button.label}
              </button>
            ))}
          </header>

          {children}
        </main>

        <Find />
      </div>

      <PostModal />
    </div>
  );
}
