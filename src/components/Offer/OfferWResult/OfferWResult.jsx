import React, { useEffect, useContext } from "react";
import BestOffer from "./BestOffer";
import GoodsList from "./GoodsList";
import { GoodsContext } from "@/contexts/goodsContext";
//import { SearchContext } from '@/contexts/searchContext';


const OfferWResult = () => {
  //const { search, setSearch } = useContext(SearchContext);
  const { goods } = useContext(GoodsContext);
  



  return (
    <>
      {/* <h1 className='offer__title'>{search.searchValue}</h1> */}
      <BestOffer />
      <GoodsList />
    </>
  );
};

export default OfferWResult;
