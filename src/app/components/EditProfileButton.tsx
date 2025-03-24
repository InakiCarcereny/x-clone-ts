'use client';

import { useModalStore } from '@/store/modal-store';

export function EditProfileButton() {
  const { openModal } = useModalStore();

  return (
    <button
      onClick={() => openModal('edit-profile')}
      className='absolute top-84 right-8 rounded-full text-white font-semibold border border-cyan-500 px-4 py-2 bg-transparent cursor-pointer'
    >
      Edit profile
    </button>
  );
}
