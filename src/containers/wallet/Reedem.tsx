import React from 'react';
import { Box } from '@material-ui/core';

import RewardRedeem from '../../components/rewards/RewardRedeem';

/* Redeem Page */
const Redeem = () => {
  return (
    <Box className="weblayout">
      <div className="weblayoutinside">
        <RewardRedeem />
      </div>
    </Box>
  );
};

export default Redeem;
