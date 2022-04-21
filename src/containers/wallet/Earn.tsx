import React from 'react';
import { Box } from '@material-ui/core';

import EarnTable from '../../components/rewards/EarnTable';
import BackButton from '../../components/buttons/BackButton';

/* ---Earn Page--- */
const Earn = () => {
  return (
    <Box className="weblayout">
      <div className="weblayoutinside">
        <BackButton cash={''} />
        <EarnTable />
      </div>
    </Box>
  );
};

export default Earn;
