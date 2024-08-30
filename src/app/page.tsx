'use client';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import ImageContainer from './components/ImageContainer';
import Location from './components/Location';
import CommingSoon from './components/CommingSoon';

export default function Home() {
  return (
    <main className={'main'}>
      <div className='grad relative flex h-dvh min-h-screen flex-col items-center justify-between overflow-hidden px-2 pt-10 sm:size-full sm:px-24'>
        <div className='flex w-full flex-col items-center gap-5 sm:w-2/3 sm:gap-10 xl:w-1/2'>
          <Header />
          <p className='text-center'>
            Empowering Nepal through our unique organizational brand. Join us as
            we pioneer new pathways and elevate the essence of Nepalese Apparel
            Brands.
          </p>
          <Location />
          <SocialMedia />
        </div>
        <ImageContainer />
        <CommingSoon />
      </div>
    </main>
  );
}
