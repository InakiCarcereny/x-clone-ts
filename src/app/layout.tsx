import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { VerifiedProvider } from '@/context/verified';
import { UserProfileProvider } from './context/user-profile';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'X-clone',
  description: 'Create by Inaki Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <VerifiedProvider>
        <UserProfileProvider>
          <body className={`${inter.className} ${inter.className} antialiased`}>
            {children}
          </body>
        </UserProfileProvider>
      </VerifiedProvider>
    </html>
  );
}
