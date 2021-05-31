import Image from 'next/image';

const EmptyOffer = () => {
  return (
    <>
      <h1 className='offer__title'>
        Здесь будут находиться результаты вашего поиска
      </h1>
      <Image
        src='/man.svg'
        alt='man-img'
        width={550}
        height={550}
      />
    </>
  );
};

export default EmptyOffer;
