import React, { useEffect, useState, useContext } from 'react';
import { MainLayout } from '@/components/MainLayout';
import OfferLayout from '@/components/Offer/OfferLayout';
import Params from '@/components/Params';
import { SearchContext } from '@/contexts/searchContext';
import { GoodsContext } from '@/contexts/goodsContext';
export default function Index({ dataGoods }) {
  //console.log(dataGoods);
  const [goods, setGoods] = useState(dataGoods);
  //console.log(goods);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/goods`);
      const data = await response.json();
      setGoods(data);
    }
     load();
  }, []);
  console.log(goods);
  return (
    <GoodsContext.Provider value={{ goods, setGoods }}>

      <MainLayout title={search.searchValue}>
        <Params />
        <OfferLayout />
      </MainLayout>

    </GoodsContext.Provider>
  );
}

Index.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/goods`)
  const dataGoods = await response.json()

  return {
    dataGoods
  }
}
