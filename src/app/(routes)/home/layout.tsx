import { Explorer } from '@/components/Explorer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='max-w-[1225px] w-full h-full mx-auto flex'>
        <Explorer />

        <main className='max-w-[600px] w-full h-full bg-yellow-100'>
          {children}
        </main>

        <section className='max-w-[350px] w-full h-full bg-green-100'>
          .
        </section>
      </div>
    </div>
  );
}
