'use client';

import { UserButton, useUser } from '@clerk/nextjs';

export default function Page() {
  const { user } = useUser();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-y-5'>
      Dashboard page
      <div className='flex items-center gap-4'>
        <UserButton afterSignOutUrl='/' />
        <div>
          <h3 className='font-bold'>{user?.username}</h3>
          <h6 className='text-gray-500 text-sm'>
            {user?.emailAddresses[0].emailAddress}
          </h6>
        </div>
      </div>
    </div>
  );
}
