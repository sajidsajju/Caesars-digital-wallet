import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useStyles } from './style';

interface Props {
  buttonText: string;
  clickUrl: string;
  style: any;
}

/* Custom Button for all components */

const ClickButton = (props: Props) => {
  const classes = useStyles(props)();
  const history = useHistory();

  /* ---Click of button navigates to the requested page--- */
  const handleClick = () => history.push(`${props.clickUrl}`);

  return (
    <div className={classes.btnContainer}>
      <Button onClick={handleClick} className={classes.button}>
        {props.buttonText}
      </Button>
    </div>
  );
};

export default ClickButton;
