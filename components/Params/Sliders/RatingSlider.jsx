import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const RatingSlider = ({ children }) => {
  const [value, setValue] = React.useState(1);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id='discrete-slider' variant='h5' gutterBottom>
        {children}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider'
        step={1}
        marks
        min={1}
        max={5}
      />
      <div className='flex justify-between mb-30'>
        <p className='params__slider-value'>{value}</p>
      </div>
    </div>
  );
};

export default RatingSlider;
