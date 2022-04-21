import React from 'react';
import { Box } from '@mui/system';

import { useStyles } from './styles/Play&play';

/* Pay and play Page */
const PlayPlay = () => {
  const classes = useStyles();
  return (
    <Box className={`weblayout ${classes.box}`}>
      <div>
        <h1>Play And Play</h1>
      </div>
    </Box>
  );
};
export default PlayPlay;
