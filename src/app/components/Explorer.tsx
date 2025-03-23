import { NavList } from '@/components/NavList';
import { InakiDev } from '@/components/InakiDev';
import { PostButton } from '@/components/PostButton';

export function Explorer() {
  return (
    <section className='flex flex-col justify-between max-w-[275px] w-full h-full bg-black py-1 px-3'>
      <div className='flex flex-col gap-6'>
        <nav className='flex flex-col w-full h-full'>
          <NavList />
        </nav>

        <PostButton />
      </div>

      <InakiDev />
    </section>
  );
}
