import { Search } from '@/icons/Search';

export function Find() {
  return (
    <section className='flex flex-col gap-8 max-w-[350px] w-full h-full text-white px-4 py-1'>
      <div className='rounded-full border border-white/40 px-4 py-2 flex items-center gap-x-2 focus-within:border-cyan-500'>
        <Search className='text-[#71767B]' />

        <input
          type='text'
          className='bg-transparent w-full focus:outline-none text-sm'
          placeholder='Search'
        />
      </div>

      <article className='rounded-xl border border-white/40 w-full h-[350px] px-4 py-4'>
        <h3 className='text-white text-xl'>Whats Happening</h3>
      </article>

      <article className='rounded-xl border border-white/40 w-full h-[350px] px-4 py-4'>
        <h3 className='text-white text-xl'>Who to Follow</h3>
      </article>
    </section>
  );
}
