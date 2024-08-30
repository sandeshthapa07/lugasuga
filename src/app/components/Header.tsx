/* eslint-disable tailwindcss/classnames-order */
import Image from 'next/image';

const Header = () => {
  return (
    <>
      {' '}
      <header>
        <Image src='/lugasuga.svg' alt='logo' width={200} height={200} />
      </header>
    </>
  );
};

export default Header;
