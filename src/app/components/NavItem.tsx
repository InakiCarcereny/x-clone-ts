'use client';

import Link from 'next/link';
import { JSX } from 'react';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  label: string;
  icon: JSX.Element;
  href: string;
  altern: JSX.Element;
}

export function NavItem({ label, icon, href, altern }: NavItemProps) {
  const pathname = usePathname();

  return (
    <li key={label} className='rounded-full hover:bg-white/10 px-4 py-2 w-fit'>
      <Link
        href={href}
        className={`flex items-center gap-x-2 ${pathname === href ? 'text-white font-semibold' : 'text-white/90'}`}
      >
        {pathname === href ? altern : icon}
        <span className='text-xl'>{label}</span>
      </Link>
    </li>
  );
}
