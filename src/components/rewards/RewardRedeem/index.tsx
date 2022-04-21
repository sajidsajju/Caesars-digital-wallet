import React, { useState, useEffect } from 'react';
import { ApiService } from '../../../services/ApiService';
import BackButton from '../../buttons/BackButton';
import { useStyles, circle } from './style';

const RewardRedeem = () => {
  const classes = useStyles();
  const apiUrl = 'redeem'; /* ---Endpoint for apiurl--- */
  /* ---state to store data from api--- */
  const [redeems, setRedeems] = useState<any>([]);

  /* ---axios call to get data from api--- */
  useEffect(() => {
    const response = async () => {
      const data: any = await ApiService({ url: apiUrl });
      setRedeems(data.message);
    };
    response();
  }, []);

  return (
    <>
      <BackButton cash={''} />

      {redeems.map((redeem, index) => (
        <div className={classes.redeems} key={index}>
          <div>
            <span className={classes.name}>{redeem.name}</span>
            <a href="#0" className={classes.Link}>
              {redeem.link}
            </a>
          </div>
          <div className={classes.SecondDiv}>
            <div className={classes.IconDiv}>
              <i className="fas fa-circle" style={circle} />
            </div>
            <div className={classes.Description}>{redeem.description}</div>
          </div>
          <hr className={classes.HR} />
        </div>
      ))}
    </>
  );
};

export default RewardRedeem;
