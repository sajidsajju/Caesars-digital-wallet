import React from 'react';

import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import {
  CCCENROLLMENT,
  WHATISCAESARSCASH,
  PLAYPLUS,
  WHYCAESARSCASH,
  CCCSIMPLE,
} from '../../../config/configHandler';

/* Get started for Enrollment */
const EnrollmentPlay = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid>
        <p className={classes.heading}>{CCCENROLLMENT}</p>
        <h3>{WHATISCAESARSCASH}</h3>
        <p>{PLAYPLUS}</p>
        <h3>{WHYCAESARSCASH}</h3>
        <p>{CCCSIMPLE}</p>
      </Grid>
    </div>
  );
};

export default EnrollmentPlay;
