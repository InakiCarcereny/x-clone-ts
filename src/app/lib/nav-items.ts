import { BookMark } from '@/icons/BookMark';
import { BookMarkFill } from '@/icons/BookMarkFill';
import { Home } from '@/icons/Home';
import { HomeFill } from '@/icons/HomeFill';
import { Search } from '@/icons/Search';
import { SearchFill } from '@/icons/SearchFill';
import { User } from '@/icons/User';
import { UserFill } from '@/icons/UserFill';
import { X } from '@/icons/X';

export const NAV_ITEMS = [
  {
    label: 'X-clone',
    icon: X({ width: 28, height: 28 }),
    href: '/home',
    altern: X({ width: 28, height: 28 }),
  },
  {
    label: 'Home',
    icon: Home({ width: 28, height: 28 }),
    href: '/home',
    altern: HomeFill({}),
  },
  {
    label: 'Explore',
    icon: Search({ width: 28, height: 28 }),
    href: '/explore',
    altern: SearchFill({}),
  },
  {
    label: 'Bookmarks',
    icon: BookMark({ width: 28, height: 28 }),
    href: '/bookmarks',
    altern: BookMarkFill({}),
  },
  {
    label: 'Profile',
    icon: User({ width: 28, height: 28 }),
    href: '/profile',
    altern: UserFill({}),
  },
] as const;
