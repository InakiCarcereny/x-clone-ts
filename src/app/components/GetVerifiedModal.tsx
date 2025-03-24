'use client';

import { useVerified } from '@/context/verified';
import { Cross } from '@/icons/Cross';
import { Verified } from '@/icons/Verified';
import { useModalStore } from '@/store/modal-store';

export function GetVerifiedModal() {
  const { isOpen, type, closeModal } = useModalStore();
  const { setGetVerified } = useVerified();

  return (
    <>
      {isOpen && type === 'get-verified' && (
        <div className='flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-cyan-500/20'>
          <div className='bg-black rounded-xl w-[550px] h-[450px] px-4 py-4 relative'>
            <button
              onClick={closeModal}
              className='hover:bg-white/10 absolute top-4 left-4 rounded-full px-1 py-1 cursor-pointer'
            >
              <Cross className='text-white' />
            </button>

            <div className='flex items-center justify-center w-full h-full'>
              <div className='flex flex-col items-center gap-4'>
                <span>
                  <Verified className='text-white w-26 h-26' />
                </span>

                <button
                  onClick={() => {
                    setGetVerified();
                    closeModal();
                  }}
                  className='text-white font-semibold cursor-pointer'
                >
                  Get Verified
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
