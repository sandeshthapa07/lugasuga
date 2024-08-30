'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Page = () => {
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <div className='commingsoon h-screen w-full bg-red-200'>
      <div className='curtains relative size-full bg-red-950'>
        <div
          className={`top ${show ? 'translate-y-0' : '-translate-y-full'} absolute left-0 top-0 h-1/2 w-full transition-all duration-1000 ease-out`}
        >
          <div className='relative size-full'>
            <Image src='/maintop.png' fill alt='top comming soon' />{' '}
          </div>
        </div>
        <div
          className={`bottom ${show ? 'translate-y-0' : 'translate-y-full'} absolute bottom-0 left-0 h-1/2 w-full transition-all duration-1000 ease-out`}
        >
          <div className='relative size-full'>
            <Image src='/bottom.png' fill alt='bottom comming soon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
