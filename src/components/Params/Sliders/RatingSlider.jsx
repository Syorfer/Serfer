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

const RatingSlider = ({ children }) => {

  const classes = useStyles();
  const { searchParam, setSearchParam } = useContext(SearchParamContext);

 // const [value, setValue] = React.useState(1);
  

  const handleChange = (event, newValue) => {
    //setValue(newValue);
    setSearchParam(prev => ({ ...prev, rateValue: newValue }));
  };

  return (
    <div className={classes.root}>
      <Typography id='discrete-slider' variant='h5' gutterBottom>
        {children}
      </Typography>
      <Slider
        value={searchParam.rateValue}
        onChange={handleChange}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider'
        step={1}
        marks
        min={searchParam.rateMin}
        max={searchParam.rateMax}
      />
      <div className='flex justify-between mb-30'>
        <p className='params__slider-value'>{searchParam.rateValue}</p>
      </div>
    </div>
  );
};

export default RatingSlider;
