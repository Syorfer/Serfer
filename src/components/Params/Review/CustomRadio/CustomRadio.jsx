import React, { useState } from 'react';
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

const CustomRadio = () => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <OrangeRadio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value={'a'}
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'A' }}
      />
    </div>
  );
};

export default CustomRadio;
