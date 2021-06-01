import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = ({ children }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([1000, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={classes.root}>
      <Typography id='range-slider' variant='h5' gutterBottom>
        {children}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={1000}
        max={5000}
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
      />
      <div className='flex justify-between mb-30'>
        <p className='params__txt'>От {value[0]} ₽</p>
        <p className='params__txt'>До {value[1]} ₽</p>
      </div>
    </div>
  );
};

export default RangeSlider;
