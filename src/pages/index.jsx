import React, { useEffect, useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import OfferLayout from '@/components/Offer/OfferLayout';
import Params from '@/components/Params';
import { SearchContext } from '@/contexts/searchContext';
import { INITIAL_SEARCH } from '@/constants/initSearch'
import { GoodsContext } from '@/contexts/goodsContext';
export default function Index() {
  const [goods, setGoods] = useState([]);
  const [search, setSearch] = useState(INITIAL_SEARCH);
  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/goods`);
      const data = await response.json();
      setGoods(data);
    }
    load();
  }, []);
  return (
    <GoodsContext.Provider value={{ goods, setGoods }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <MainLayout title={search.searchValue}>
          <Params />
          <OfferLayout />
        </MainLayout>
      </SearchContext.Provider>
    </GoodsContext.Provider>  
  );
}
