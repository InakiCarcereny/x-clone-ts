'use client';

import { useModalStore } from '@/store/modal-store';
import { Button } from '@/components/Button';

export function EditProfileButton() {
  const { openModal } = useModalStore();

  return (
    <Button
      label='Edit profile'
      textSize='text-base'
      bgColor='bg-transparent'
      textColor='text-white'
      borderRadius='rounded-full'
      borderSize='border'
      borderColor='border-cyan-500'
      paddingX='px-4'
      paddingY='py-2'
      fontWeight='font-semibold'
      handleClick={() => openModal('edit-profile')}
      cursor='cursor-pointer'
      className='absolute top-84 right-8'
    />
  );
}
