/* eslint-disable tailwindcss/classnames-order */
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const SocialMedia = () => {
  return (
    <div className='socialmedia relative flex flex-col items-center gap-3 rounded-full bg-white p-3 px-10 shadow-[0px_4px_4px_2px_#00000025]'>
      <div
        style={{
          boxShadow: '0px 4px 4px 2px #00000025',
          backgroundColor: '#fff',
        }}
        className='absolute inset-0 z-20 size-full rounded-full bg-white p-3 px-10'
      ></div>
      <div className='z-40 flex flex-row items-center gap-2'>
        <svg
          width='43'
          height='5'
          viewBox='0 0 43 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M42.0997 2.07918C39.9316 1.86668 37.4928 1.63106 35.8141 1.43575C31.9235 0.984289 28.0631 0.648247 24.2328 0.427622C20.4026 0.206997 16.7531 0.18481 13.2841 0.36106C9.81514 0.537518 6.8767 1.09783 4.46878 2.042C3.3916 2.45606 2.49722 3.037 1.35972 3.70887C0.222222 4.38075 1.32128 5.14043 2.24035 4.53543C3.15941 3.93043 4.3341 3.22575 5.49472 2.76481C7.04451 2.13981 8.81743 1.71002 10.8135 1.47543C12.8095 1.24085 14.9639 1.13554 17.2766 1.1595C19.5891 1.18387 21.9707 1.30481 24.4213 1.52231C26.8719 1.73981 29.3565 2.00231 31.875 2.30981C34.3938 2.61689 36.8571 2.92835 39.265 3.24418C40.0922 3.35294 40.986 3.42512 42.3528 3.5595C42.2357 3.23387 42.1269 2.51762 42.0997 2.07918Z'
            fill='#1B1B1B'
          />
        </svg>
        <h4 className='font-light'>Follow Us</h4>
        <svg
          width='43'
          height='7'
          viewBox='0 0 43 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M42.0193 0.492272C41.9212 0.389772 41.7455 0.340501 41.4924 0.344459C41.2393 0.347897 40.9812 0.423834 40.7199 0.570084C36.932 2.56633 33.0013 3.9205 28.9277 4.63258C24.8177 5.34883 20.6521 5.69812 16.4802 5.67633C12.2265 5.65888 7.97693 5.40735 3.75084 4.9229C3.21366 4.8604 2.07709 4.72727 0.849277 4.58227C0.706778 5.02758 0.552715 5.48102 0.353027 5.84352C1.83865 6.00321 3.01959 6.14165 3.70959 6.20165C8.0399 6.58146 12.3878 6.72303 16.7337 6.62571C21.0118 6.5283 25.275 6.08456 29.4815 5.29883C33.6858 4.51363 37.7441 3.16529 41.6562 1.25383C41.9215 1.1379 42.0737 1.00758 42.1102 0.863522C42.1468 0.719459 42.1174 0.594459 42.0193 0.492272Z'
            fill='#1B1B1B'
          />
        </svg>
      </div>
      <div className='social-icons z-40 flex flex-row gap-3'>
        <a
          className='rounded-[5.71px] bg-primary p-2.5'
          href='www.facebook.com'
        >
          <FaFacebook fill='#fff' />
        </a>
        <a
          className='rounded-[5.71px] bg-primary p-2.5'
          href='www.instagram.com'
        >
          <FaInstagram fill='#fff' />
        </a>
        <a className='rounded-[5.71px] bg-primary p-2.5' href='www.tiktok.com'>
          <FaTiktok fill='#fff' />
        </a>
      </div>
      <div className='tag absolute bottom-[-160%] left-2/3 z-10 -translate-x-2/3'>
        <div className='relative h-[188px] w-[129px]'>
          <Image
            src='/tag.svg'
            alt='logo'
            width={200}
            height={200}
            className=''
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
