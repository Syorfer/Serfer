import React, { useEffect, useState, useContext } from 'react';
import { MainLayout } from '@/components/MainLayout';
import OfferLayout from '@/components/Offer/OfferLayout';
import Params from '@/components/Params';
import { SearchContext } from '@/contexts/searchContext';
import { GoodsContext } from '@/contexts/goodsContext';
export default function Index({ dataGoods }) {
  console.log(dataGoods);
  const INITIAL_GOODS = {
    data: dataGoods,
    selectedData: [] ,
    idDataSet: Date.now()    
  };
  const [goods, setGoods] = useState(INITIAL_GOODS);

  //console.log(goods);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/goods`);
      const data = await response.json();
      setGoods(prev => ({ ...prev, data: data, idDataSet: Date.now() }));
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
