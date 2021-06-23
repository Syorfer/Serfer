import React, { useContext, useEffect } from 'react';

import EmptyOffer from './EmptyOffer';
import { SearchContext } from '@/contexts/searchContext';
import { GoodsContext } from "@/contexts/goodsContext";
import OfferWResult from './OfferWResult/OfferWResult';

function randomInteger(min, max = 1) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const OfferLayout = () => {

  const { search, setSearch } = useContext(SearchContext);
  const { goods } = useContext(GoodsContext);
  useEffect(() => {
    const bestGoodInx = randomInteger(0, (goods.data && goods.data.length) - 1);
    //console.log(goods);
    goods.data && setSearch(prev => ({ ...prev, bestGoodId: goods.data[bestGoodInx] && goods.data[bestGoodInx].id || 0 }));
  }, [search.searchValue]);
  useEffect(() => {
    goods.data && setSearch(prev => ({ ...prev, selectedItems: goods.data.filter(item => item.deliveryCost < 980) }));
  }, [search.searchValue]);
  console.log(search.selectedItems);
  return (
    <div className='offer'>
      {/* <h1 className='offer__title'>
        {search.searchValue.length}
      </h1> */}
      {search.submit ?
        <OfferWResult />
        :
        <EmptyOffer />
      }
    </div>
  );
};

export default OfferLayout;
