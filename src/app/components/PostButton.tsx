'use client';

import { useModalStore } from '@/store/modal-store';
import { Button } from '@/components/Button';

export function PostButton() {
  const { openModal } = useModalStore();

  return (
    <Button
      label='Post'
      textSize='text-xl'
      bgColor='bg-white'
      textColor='text-black'
      borderRadius='rounded-full'
      paddingX='px-4'
      paddingY='py-2'
      fontWeight='font-semibold'
      handleClick={() => openModal('post')}
      hoverBgColor='hover:bg-white/90'
      cursor='cursor-pointer'
    />
  );
}
