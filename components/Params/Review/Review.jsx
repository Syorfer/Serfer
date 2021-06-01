import { Radio, Typography } from '@material-ui/core';
import CustomRadio from '../CustomRadio/CustomRadio';

const Review = () => {
  return (
    <>
      <Typography id='discrete-slider' variant='h5' gutterBottom>
        Отзывы
      </Typography>
      <div className='flex items-center justify-between'>
        <p className='params__txt mt-20'>До 10 отзывов</p>
        <CustomRadio />
      </div>
      <div className='flex items-center justify-between'>
        <p className='params__txt mt-10'>Больше 10 отзывов</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='params__txt mt-10'>Не имеет значения</p>
      </div>
    </>
  );
};

export default Review;
