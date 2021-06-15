import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';
import { SearchParamContext } from '@/contexts/searchParamContext';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}


const RangeSlider = ({ children, type }) => {

  const classes = useStyles();
  let sliderMin = 0;
  let sliderMax = 0;
  let sliderValue = 0;
  let paramName = '';
  const { searchParam, setSearchParam } = useContext(SearchParamContext);

  switch (type) {
    case 'PRICE':
      {
        sliderMin = searchParam.priceMin;
        sliderMax = searchParam.priceMax;
        // setSearchParam(prev => ({ ...prev, priceValue: [sliderMin, sliderMax] }));
        sliderValue = searchParam.priceValue;
        paramName = 'priceValue';
        break;
      };
    case 'DELIVERY':
      {
        sliderMin = searchParam.deliveryMin;
        sliderMax = searchParam.deliveryMax;
        // setSearchParam(prev => ({ ...prev, deliveryValue: [sliderMin, sliderMax] }));
        sliderValue = searchParam.deliveryValue;
        paramName = 'deliveryValue';
        break;
      };


  }
  //console.log(sliderValue);
  //const [value, setValue] = React.useState([sliderMin, sliderMax]);
  const handleChange = (event, newValue) => {
    setSearchParam(prev => ({ ...prev, [paramName]: newValue }));
  };

  return (
    <div className={classes.root}>
      <Typography id='range-slider' variant='h5' gutterBottom>
        {children}
      </Typography>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        min={sliderMin}
        max={sliderMax}
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
      />
      <div className='flex justify-between mb-30'>
        <p className='params__txt'>От {sliderValue[0]} ₽</p>
        <p className='params__txt'>До {sliderValue[1]} ₽</p>
      </div>
    </div>
  );
};

export default RangeSlider;
