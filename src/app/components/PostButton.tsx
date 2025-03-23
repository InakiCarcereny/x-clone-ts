'use client';

import { useModalStore } from '@/store/modal-store';

export function PostButton() {
  const { openModal } = useModalStore();

  return (
    <button
      onClick={() => openModal('post')}
      className='bg-white rounded-full text-black px-4 py-2 flex items-center justify-center font-semibold text-xl cursor-pointer hover:bg-white/90'
    >
      Post
    </button>
  );
}
