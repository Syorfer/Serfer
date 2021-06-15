import React, { useContext } from 'react';

import EmptyOffer from './EmptyOffer';
import { SearchContext } from '@/contexts/searchContext';
import OfferWResult from './OfferWResult/OfferWResult';

const OfferLayout = () => {
  const { search } = useContext(SearchContext);
  return (
    <div className='offer'>
      <h1 className='offer__title'>
        {search.searchValue.lenght}
      </h1>
      {search.submit ?
        <OfferWResult />
        :
        <EmptyOffer />
      }
    </div>
  );
};

export default OfferLayout;
