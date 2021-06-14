import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import { SearchContext } from '@/contexts/searchContext';

const OfferWResult = () => {
  const { search } = useContext(SearchContext);
  return (
    <>
      <h1 className='offer__title'>
        {search.searchValue}
      </h1>
      <Grid container justify='center'>
        <Image src='/man.svg' alt='man-img' width={550} height={550} />
      </Grid>
    </>
  );
};

export default OfferWResult;