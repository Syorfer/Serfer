import React, { useState } from 'react';
import RangeSlider from './Sliders/RangeSlider';
import { Typography, Button } from '@material-ui/core';
import RatingSlider from './Sliders/RatingSlider';
import Review from './Review';
import { SearchParamContext } from '@/contexts/searchParamContext';
import { INITIAL_PARAM } from '@/constants/initParam';

const Params = () => {
  const [searchParam, setSearchParam] = useState(INITIAL_PARAM);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SearchParamContext.Provider value={{ searchParam, setSearchParam }}>
      <form className='params' onSubmit={handleSubmit}>
        <Typography variant='h4' gutterBottom>
          Параметры
        </Typography>
        <div className='params__price'>
          <RangeSlider type='PRICE'>Цена</RangeSlider>
          <RangeSlider type='DELIVERY'>Доставка</RangeSlider>
          <RatingSlider type='RATE'>Рейтинг</RatingSlider>
          <Review />
        </div>
        <Button
          type='submit'
          variant='contained'
          disabled={false}
          style={{
            color: '#fff',
            background: '#FF702A',
            display: 'block',
            margin: '120px auto 0',
            padding: '10px',
            borderRadius: '24px',
            width: '190px'
          }}
        >
          Уточнить
        </Button>
      </form>
    </SearchParamContext.Provider>
  );
};

export default Params;
