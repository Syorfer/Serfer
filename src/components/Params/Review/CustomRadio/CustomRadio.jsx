import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core';
import { SearchParamContext } from '@/contexts/searchParamContext';

const OrangeRadio = withStyles({
  root: {
    color: '#FF702A',
    '&$checked': {
      color: 'default',
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

const CustomRadio = ({ val }) => {

  const { searchParam, setSearchParam } = useContext(SearchParamContext);
  
  const onFieldChange = (e) => {
    const value = e.target.value;
    setSearchParam(prev => ({ ...prev, review: value }));
    console.log(value);
  };

  return (
    <div>
      <OrangeRadio
        checked={searchParam.review === val}
        onChange={onFieldChange}
        value={val}
        name='review'
        inputProps={{ 'aria-label': 'A' }}
      />
    </div>
  );
};

export default CustomRadio;
