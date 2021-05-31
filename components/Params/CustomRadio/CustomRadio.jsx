import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const OrangeRadio = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: 'default',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const CustomRadio = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <OrangeRadio
        checked={false}
        onChange={handleChange}
        value={selectedValue}
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
    </div>
  );
}

export default CustomRadio;