import { MdPhone } from 'react-icons/md';
import { TbLocationFilled } from 'react-icons/tb';

const Location = () => {
  return (
    <address className='flex flex-col items-center gap-6 font-medium not-italic lg:flex-row'>
      <p className='flex items-center justify-center gap-2'>
        <span className='rounded-full bg-primary p-2'>
          <TbLocationFilled fill='#fff' size={12} />
        </span>{' '}
        <span> Townplanning Pepsicola, Kathmandu</span>
      </p>
      <p className='flex items-center gap-2'>
        <span className='rounded-full bg-primary p-2'>
          <MdPhone fill='#fff' size={14} />
        </span>{' '}
        <span>+977 9812345123</span>
      </p>
    </address>
  );
};

export default Location;
