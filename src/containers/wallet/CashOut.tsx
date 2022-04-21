import React from 'react';
import { Box } from '@mui/system';

import { useStyles } from './styles/CashOut';

/* ---CashOut Page--- */
const CashOut = () => {
  const classes = useStyles();
  return (
    <Box className={`weblayout ${classes.box}`}>
      <div>
        <h1>Cash Out</h1>
      </div>
    </Box>
  );
};
export default CashOut;
