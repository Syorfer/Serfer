import React, { useContext } from 'react';

import EmptyOffer from './EmptyOffer';
import { SearchContext } from '@/contexts/searchContext';
import OfferWResult from './OfferWResult/OfferWResult';

const OfferLayout = () => {
  const { search } = useContext(SearchContext);
  return (
    <div className='offer'>
      {search.searchValue === null ?
        <EmptyOffer /> :
        <OfferWResult />
      }
    </div>
  );
};

export default OfferLayout;
