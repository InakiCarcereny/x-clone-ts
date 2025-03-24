'use client';

import { BUTTONS } from '@/lib/buttons';
import { isHeaderHidden } from '@/utils/layout-options';
import { usePathname } from 'next/navigation';

export function HomeHeaderLayout() {
  const pathname = usePathname();

  const hiddenHeader = isHeaderHidden(pathname, [
    '/home/connect-people',
    '/home/profile',
  ]);

  return (
    <header
      className={`flex items-center justify-between w-full border border-b-white/40 ${hiddenHeader ? 'hidden' : ''}`}
    >
      {BUTTONS.map((button) => (
        <button
          key={button.label}
          className='text-[#71767B] hover:bg-white/10 px-4 py-4 w-full'
        >
          {button.label}
        </button>
      ))}
    </header>
  );
}
