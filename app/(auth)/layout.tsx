import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      {children}
    </main>
  );
}
