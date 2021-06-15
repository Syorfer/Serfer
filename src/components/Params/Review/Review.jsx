import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import CustomRadio from './CustomRadio';

import { SearchParamContext } from '@/contexts/searchParamContext';
import { REVIEWS } from '@/constants/initParam';

const Review = () => {

  const { searchParam, setSearchParam } = useContext(SearchParamContext);

  return (
    <>
      <Typography id='discrete-slider' variant='h5' gutterBottom>
        Отзывы
      </Typography>
      
      {REVIEWS.map((review, indx) => (
        <div key={ indx } className='flex items-center justify-between'>
          <p className='params__txt mt-20'>{ review }</p>          
          <CustomRadio val={ review }/>
        </div>
      )
      )}  
        
      
     
    </>
  );
};

export default Review;
