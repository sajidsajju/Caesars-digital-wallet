import React from 'react';
import { Box } from '@material-ui/core';

import { useStyles } from './styles/Transfer';

/* Transfer Page */
const Transfer = () => {
  const classes = useStyles();
  return (
    <Box className={`weblayout ${classes.box}`}>
      <div>
        <h1>Transfer</h1>
      </div>
    </Box>
  );
};
export default Transfer;
