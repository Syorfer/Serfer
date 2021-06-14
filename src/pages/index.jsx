import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import OfferLayout from '@/components/Offer/OfferLayout';
import Params from '@/components/Params';
import { SearchContext } from '@/contexts/searchContext';
import { INITIAL_SEARCH } from '@/constants/initSearch'

export default function Index() {
  const [search, setSearch] = useState(INITIAL_SEARCH);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <MainLayout title={'Home Page'}>
        <Params />
        <OfferLayout />
      </MainLayout>
    </SearchContext.Provider>
  );
}
