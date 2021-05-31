import CustomSlider from './Sliders/CustomSlider';
import { Typography, Button } from '@material-ui/core';
import RatingSlider from './Sliders/RatingSlider';
import Review from './Review';

const Params = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className='params' onSubmit={handleSubmit}>
      <Typography variant='h4' gutterBottom>
        Параметры
      </Typography>
      <div className='params__price'>
        <CustomSlider>Цена</CustomSlider>
        <CustomSlider>Доставка</CustomSlider>
        <RatingSlider>Рейтинг</RatingSlider>
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
        Подобрать
      </Button>
    </form>
  );
};

export default Params;
