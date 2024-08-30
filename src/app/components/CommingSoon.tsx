'use client';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';

const CommingSoon = () => {
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <>
      {' '}
      <div
        className={`top ${show ? 'translate-y-0' : '-translate-y-full'} absolute left-0 top-0 z-[9999999] h-1/2 w-full transition-all duration-1000 ease-out`}
      >
        <div className='relative size-full'>
          <Image src='/maintop.png' fill alt='top comming soon' />{' '}
        </div>
      </div>
      <div
        className={`bottom ${show ? 'translate-y-0' : 'translate-y-full'} absolute bottom-0 left-0 z-[9999999] h-1/2 w-full transition-all duration-1000 ease-out`}
      >
        <div className='relative size-full'>
          <Image src='/bottom.png' fill alt='bottom comming soon' />
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
