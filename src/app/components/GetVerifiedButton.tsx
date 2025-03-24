'use client';

import { useVerified } from '@/context/verified';
import { Verified } from '@/icons/Verified';
import { useModalStore } from '@/store/modal-store';

export function GetVerifiedButton() {
  const { openModal } = useModalStore();
  const { verified } = useVerified();

  return (
    <>
      {verified ? (
        <span>
          <Verified className='text-black w-5 h-5' />
        </span>
      ) : (
        <button
          onClick={() => openModal('get-verified')}
          className='rounded-full text-white font-semibold border border-cyan-500 px-2 py-1 bg-transparent cursor-pointer flex items-center gap-x-2 text-sm'
        >
          <span>
            <Verified className='text-black w-5 h-5' />
          </span>
          Get Verified
        </button>
      )}
    </>
  );
}
