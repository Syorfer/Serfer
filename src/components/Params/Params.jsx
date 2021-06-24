import React, { useState, useContext, useEffect } from 'react';
import _ from 'lodash';
import RangeSlider from './Sliders/RangeSlider';
import { Typography, Button } from '@material-ui/core';
import RatingSlider from './Sliders/RatingSlider';

import Review from './Review';
import { SearchParamContext } from '@/contexts/searchParamContext';
import { SearchContext } from '@/contexts/searchContext';
import { GoodsContext } from "@/contexts/goodsContext";
import { INITIAL_PARAM } from '@/constants/initParam';

const Params = () => {
  const [searchParam, setSearchParam] = useState(INITIAL_PARAM);
  const { search, setSearch } = useContext(SearchContext);
  const { goods, setGoods } = useContext(GoodsContext);
  useEffect(() => {
    //console.log(_.minBy(goods.data, 'price'));
    const priceValue = [_.minBy(goods.data, 'price').price, _.maxBy(goods.data, 'price').price];
    const deliveryValue = [_.minBy(goods.data, 'deliveryCost').deliveryCost, _.maxBy(goods.data, 'deliveryCost').deliveryCost];
    setSearchParam(prev => ({
      ...prev,
      priceMin: priceValue[0],
      priceMax: priceValue[1],
      priceValue: priceValue,
      deliveryMin: deliveryValue[0],
      deliveryMax: deliveryValue[1],
      deliveryValue: deliveryValue
    }));
    setGoods(prev => ({ ...prev, selectedData: [...goods.data]}));
    console.log(searchParam);
  },
    [goods.idDataSet]
  );

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  const onSubmit = (e) => {
    setSearch(prev => ({
      ...prev,
      priceMin: searchParam.priceValue[0],
      priceMax: searchParam.priceValue[1],
      deliveryMin: searchParam.deliveryValue[0],
      deliveryMax: searchParam.deliveryValue[1],
      rate: searchParam.rateValue,
      review: searchParam.review,
      submit: true
    }));
    e.preventDefault();
    // console.log(search);
  };

  return (
    <SearchParamContext.Provider value={{ searchParam, setSearchParam }}>
      <form className='params' onSubmit={onSubmit}>
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
