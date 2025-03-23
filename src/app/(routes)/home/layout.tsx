import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full h-screen bg-black'>
      <div></div>

      <main>{children}</main>
    </div>
  );
}
