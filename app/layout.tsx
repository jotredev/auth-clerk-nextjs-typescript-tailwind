import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/libs/utils';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth Clerk',
  description: 'Auth Clerk',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={cn('bg-gray-100', font.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
