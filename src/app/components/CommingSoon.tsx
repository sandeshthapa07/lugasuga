'use client';

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
        className={`top ${show ? 'translate-y-0' : '-translate-y-full'} absolute left-0 top-0 z-[9999999] h-1/2 w-full bg-black transition-all duration-1000 ease-out`}
      >
        <div className='relative size-full'>
          <div className='absolute bottom-[-11%] left-1/2 -translate-x-1/2 text-white'>
            <div className='relative z-[9999999] text-[9.375vw] font-bold'>
              COMING{' '}
              {/* <div className='absolute'>
                <Image
                  src='/lugasugalogo.svg'
                  alt='top comming soon'
                  width={172}
                  height={172}
                />{' '}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bottom ${show ? 'translate-y-0' : 'translate-y-full'} absolute bottom-0 left-0 z-[9999999] h-1/2 w-full bg-black transition-all duration-1000 ease-out`}
      >
        <div className='relative size-full'>
          <div className='absolute left-1/2 top-[-16%] -translate-x-1/2 text-center text-white'>
            <h3 className='text-[9.375vw] font-bold'>SOON</h3>
            <p className='font-light text-white'>
              Join us as we pioneer new pathways and elevate the essence of
              Nepalese Apparel Brands.
            </p>
          </div>

          {/* <Image
            src='/bottomc.png'
            fill
            alt='bottom comming soon'
            width={1920}
            height={540}
          /> */}
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
