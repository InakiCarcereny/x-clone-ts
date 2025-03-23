import { NavList } from '@/components/NavList';
import { InakiDev } from '@/components/InakiDev';

export function Explorer() {
  return (
    <section className='flex flex-col justify-between max-w-[275px] w-full h-full bg-black py-1 px-3'>
      <div className='flex flex-col gap-6'>
        <nav className='flex flex-col w-full h-full'>
          <NavList />
        </nav>

        <button className='bg-white rounded-full text-black px-4 py-2 flex items-center justify-center font-semibold text-xl cursor-pointer hover:bg-white/90'>
          Post
        </button>
      </div>

      <InakiDev />
    </section>
  );
}
