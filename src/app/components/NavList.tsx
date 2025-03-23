import { NAV_ITEMS } from '@/lib/nav-items';
import { NavItem } from './NavItem';

export function NavList() {
  return (
    <ul className='flex flex-col gap-y-4'>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          href={item.href}
          altern={item.altern}
        />
      ))}
    </ul>
  );
}
