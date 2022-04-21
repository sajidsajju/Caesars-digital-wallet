import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import { ENDNAMECASHCARD } from '../../../config/configHandler';
/* ---Backbutton component--- */
const BackButton = ({ cash }) => {
  const history = useHistory();
  const classes = useStyles();
  /* ---Click of button navigate to back--- */
  const handleClick = () => {
    history.goBack();
    /* ---Check if back button should navigate to cashcard--- */
    if (cash === 'cash') {
      history.push({ pathname: '/', search: ENDNAMECASHCARD });
    }
  };

  return (
    <div className={classes.btnContainer}>
      <Button onClick={handleClick} className={classes.button}>
        <i className="far fa-arrow-left fa-lg"></i>
      </Button>
      <h5 className={classes.btnLabel}>
        {cash === 'cash' ? 'CASH CARD' : 'REWARDS'}
      </h5>
    </div>
  );
};

export default BackButton;
