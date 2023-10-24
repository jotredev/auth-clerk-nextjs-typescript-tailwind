'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <div className='min-h-screen flex flex-col gap-y-5 items-center justify-center'>
      <h1>Home Page</h1>
      {!isSignedIn ? (
        <div className='flex flex-col gap-2'>
          <Link href='/sign-in' className='bg-white py-3 px-5 rounded-xl'>
            Iniciar sesión
          </Link>
          <Link href='/sign-up' className='bg-white py-3 px-5 rounded-xl'>
            Crear cuenta
          </Link>
        </div>
      ) : (
        <Link href='/dashboard' className='underline'>
          Dashboard
        </Link>
      )}
    </div>
  );
}
