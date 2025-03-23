import { Explorer } from '@/components/Explorer';
import { ReactNode } from 'react';
import { BUTTONS } from '@/lib/buttons';
import { Search } from '@/icons/Search';

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

        <section className='flex flex-col gap-8 max-w-[350px] w-full h-full text-white px-4 py-1'>
          <div className='rounded-full border border-white/40 px-4 py-2 flex items-center gap-x-2 focus-within:border-cyan-500'>
            <Search className='text-[#71767B]' />

            <input
              type='text'
              className='bg-transparent w-full focus:outline-none text-sm'
              placeholder='Search'
            />
          </div>

          <article className='rounded-xl border border-white/40 w-full h-[350px] px-4 py-4'>
            <h3 className='text-white text-xl'>Whats Happening</h3>
          </article>

          <article className='rounded-xl border border-white/40 w-full h-[350px] px-4 py-4'>
            <h3 className='text-white text-xl'>Who to Follow</h3>
          </article>
        </section>
      </div>
    </div>
  );
}
