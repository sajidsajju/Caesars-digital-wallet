import React from 'react';
import { Box } from '@material-ui/core';

import ClickButton from '../../components/buttons/Button';
import EnrollmentPlay from '../../components/cash/EnrollmentPlay';
import { style, useStyles } from './styles/Enrollment';

/* Cash Card Enrollment Page */

const Enrollment = () => {
  const classes = useStyles();

  return (
    <>
      <Box className="weblayout">
        <div className={`weblayoutinside ${classes.box}`}>
          <EnrollmentPlay />
          <ClickButton
            clickUrl={'payment'}
            buttonText={'Enroll Now'}
            style={style}
          />
        </div>
      </Box>
    </>
  );
};

export default Enrollment;
