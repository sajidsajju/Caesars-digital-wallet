import React from 'react';

import { useStyles } from './style';
import {
  CEASERCASHCARD,
  ACTIVATECARD,
  MOREREWARDS,
  PLAYANDPAY,
  ANYTIME,
} from '../../../config/configHandler';

/* Starting page of Cash Card Activation */

const ActivateCard = () => {
  const classes = useStyles();

  const lists = [
    {
      icon: 'fal fa-gift',
      description: MOREREWARDS,
    },
    {
      icon: 'fal fa-lock-alt',
      description: PLAYANDPAY,
    },
    {
      icon: 'fal fa-clock',
      description: ANYTIME,
    },
  ];

  return (
    <>
      <p className={classes.ceheading}>{CEASERCASHCARD}</p>
      <p className={classes.activate}>{ACTIVATECARD}</p>
      {lists.map((list, index) => (
        <div key={index} className={classes.spacing}>
          <div className={classes.iconbg}>
            <i className={list.icon}></i>
          </div>

          <span className={`${classes.iconDiv} ${classes.span}`}>
            {list.description}
          </span>
        </div>
      ))}
    </>
  );
};

export default ActivateCard;
