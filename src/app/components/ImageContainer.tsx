import Image from 'next/image';

const images: { id: number; src: string; alt: string }[] = [
  {
    id: 1,
    src: '/images/first.png',
    alt: 'image1',
  },
  {
    id: 2,
    src: '/images/second.png',
    alt: 'image2',
  },
  {
    id: 3,
    src: '/images/third.png',
    alt: 'image3',
  },
  {
    id: 4,
    src: '/images/fourth.png',
    alt: 'image4',
  },
  {
    id: 5,
    src: '/images/fifth.png',
    alt: 'image5',
  },
  {
    id: 6,
    src: '/images/last.png',
    alt: 'image6',
  },
];

const ImageContainer = () => {
  return (
    <div className='absolute -bottom-[30%] left-1/2 flex w-[90%] -translate-x-1/2 flex-row justify-center gap-4 overflow-hidden rounded-[29.5px] bg-primary px-10 py-4 shadow-[24px_0px_4px_0px_#FFD6C6] sm:-bottom-[30%] lg:-bottom-[15%] xl:w-4/5'>
      <div className='flex flex-row gap-4 rounded-xl'>
        {images?.map((image) => (
          <div
            key={image?.id}
            className={`${image?.id === 4 || image?.id === 1 || image?.id == 5 ? ` ${image?.id == 1 ? `hidden lg:block` : 'hidden sm:block'} ` : 'block'}`}
          >
            <Image
              src={image?.src}
              alt={image.alt}
              width={300}
              height={500}
              className={`h-[500px] w-[300px] rounded-xl object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
