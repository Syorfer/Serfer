import CustomSlider from '../Sliders/CustomSlider';
import Typography from '@material-ui/core/Typography';
import RatingSlider from '../Sliders/RatingSlider';

const Params = () => {
  return (
    <div className='params'>
      <Typography variant='h4' gutterBottom>
        Параметры
      </Typography>
      <div className='params__price'>
        <CustomSlider>Цена</CustomSlider>
        <CustomSlider>Доставка</CustomSlider>
        <RatingSlider>Рейтинг</RatingSlider>
        <Typography id='discrete-slider' variant='h5' gutterBottom>
          Отзывы
        </Typography>
      </div>
    </div>
  );
};

export default Params;
