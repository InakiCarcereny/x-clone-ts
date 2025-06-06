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
    altern: HomeFill({ width: 28, height: 28 }),
  },
  {
    label: 'Explore',
    icon: Search({ width: 28, height: 28 }),
    href: '/home/explore',
    altern: SearchFill({ width: 28, height: 28 }),
  },
  {
    label: 'Bookmarks',
    icon: BookMark({ width: 28, height: 28 }),
    href: '/home/bookmarks',
    altern: BookMarkFill({ width: 28, height: 28 }),
  },
  {
    label: 'Profile',
    icon: User({ width: 28, height: 28 }),
    href: '/home/profile',
    altern: UserFill({ width: 28, height: 28 }),
  },
] as const;
