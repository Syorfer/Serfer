export const REVIEWS = [
  'Не имеет значения',
  'До 10 отзывов',
  'Больше 10 отзывов',
  
];

const range = {
  price: {
    min: 1000,
    max: 5000
  },
  delivery: {
    min: 50,
    max: 800
  },
  rate: {
    min: 1,
    max: 5
  }
}

export const INITIAL_PARAM = {
    priceMin: range.price.min,
    priceMax: range.price.max,
    priceValue: [range.price.min,range.price.max],
    deliveryMin: range.delivery.min,
    deliveryMax: range.delivery.max,
    deliveryValue: [range.delivery.min,range.delivery.max],
    rateMin: range.rate.min,
    rateMax: range.rate.max,
    rateValue: range.rate.min,
    review: REVIEWS[0]
  };