import Link from 'next/link';

interface SeeMoreProps {
  href: string;
}

export function SeeMore({ href }: SeeMoreProps) {
  return (
    <Link href={href}>
      <button className='text-[#1D9BF0] cursor-pointer'>See More</button>
    </Link>
  );
}
