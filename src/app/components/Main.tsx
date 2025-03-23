import { BUTTONS } from '@/lib/buttons';

export function Main() {
  return (
    <main className='flex flex-col max-w-[600px] w-full h-full border-x border-white/40'>
      <header className='flex items-center justify-between w-full border border-b-white/40'>
        {BUTTONS.map((button) => (
          <button
            key={button.label}
            className='text-[#71767B] hover:bg-white/10 px-4 py-4 w-full'
          >
            {button.label}
          </button>
        ))}
      </header>
    </main>
  );
}
