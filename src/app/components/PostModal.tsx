'use client';

import { Cross } from '@/icons/Cross';
import { useModalStore } from '@/store/modal-store';

export function PostModal() {
  const { isOpen, type, closeModal } = useModalStore();

  return (
    <>
      {isOpen && type === 'post' && (
        <div className='flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-cyan-500/20'>
          <div className='bg-black rounded-xl w-[550px] h-[300px] px-4 py-4'>
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
          </div>
        </div>
      )}
    </>
  );
}
