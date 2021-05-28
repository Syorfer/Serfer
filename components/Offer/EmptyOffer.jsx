import Image from 'next/image';

const EmptyOffer = () => {
  return (
    <>
      <Image
        src='/public/man.svg'
        alt='man-img'
        width={500}
        height={500}
      />
    </>
  );
};

export default EmptyOffer;
