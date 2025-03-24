'use client';

import { Cross } from '@/icons/Cross';
import { Gallery } from '@/icons/Gallery';
import { useModalStore } from '@/store/modal-store';
import Image from 'next/image';

export function PostModal() {
  const { isOpen, type, closeModal } = useModalStore();

  return (
    <>
      {isOpen && type === 'post' && (
        <div className='flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-cyan-500/20'>
          <div className='flex flex-col justify-between bg-black rounded-xl w-[550px] h-[450px] px-4 py-4'>
            <div className='flex flex-col gap-10'>
              <header className='flex items-center justify-between w-full'>
                <button
                  onClick={closeModal}
                  className='rounded-full px-1 py-1 hover:bg-white/10 cursor-pointer'
                >
                  <Cross className='text-white' />
                </button>

                <span className='text-[#1D9BF0] font-semibold px-4 py-1 bg-cyan-900/30 rounded-full'>
                  Post
                </span>
              </header>

              <div className='flex w-full gap-4'>
                <Image
                  src='/assets/me.jpeg'
                  width={54}
                  height={54}
                  alt='me'
                  className='rounded-full'
                />

                <input
                  type='text'
                  className='w-full bg-transparent focus:outline-none h-full text-white'
                  placeholder='Whats happening?'
                />
              </div>
            </div>

            <footer className='flex flex-col gap-2 w-full'>
              <div className='border border-white/40 w-full'></div>
              <div className='flex items-center justify-between w-full'>
                <div className='flex gap-2 items-center'>
                  <span>
                    <Gallery className='text-[#1D9BF0] hover:bg-cyan-900/30 rounded-full p-1 w-10 h-10' />
                  </span>
                  <span className='text-white'>emoji</span>
                </div>

                <button className='text-black bg-white px-4 py-2 rounded-full font-semibold'>
                  Post
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
