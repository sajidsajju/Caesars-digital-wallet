import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { ApiPostService } from '../../services/ApiService';
import { useStyles } from './styles/Payment';

/* Cash Card Payment Page */

const Payment = () => {
  const classes = useStyles();

  /* ---state to store data from api--- */
  const [data, setData] = useState<any>('');

  /* ---state for Loader icon--- */
  const [loading, setLoading] = useState<boolean>(true);

  /* ---Endpoint for apiurl--- */
  const apiUrl = 'enroll';

  /* ---useSelector for user data--- */
  const UserData = useSelector(
    (state: any) => state.ProfileReducer.profiledata.message.userData,
  );

  useEffect(() => {
    async function response() {
      const enrolldata: any = await ApiPostService({
        url: apiUrl,
        data: UserData,
        timeOut: 30000,
      });
      if (enrolldata) {
        if (enrolldata.success) {
          setData(enrolldata.message);
        } else {
          console.log(enrolldata.message);
        }
      } else {
        setLoading(false);
      }
    }
    response();
  }, [UserData]);

  /* ---iframe loader--- */
  const iframeLoaded = () => {
    setLoading(false);
  };
  return (
    <>
      <Box className="weblayout">
        <div className="weblayoutinside">
          <iframe
            title="Enrollment"
            className={classes.second}
            scrolling="no"
            frameBorder="0"
            src={data}
            allow="payment"
            onLoad={iframeLoaded}
          />
        </div>
      </Box>
      {loading ? (
        <div className="spinner-container">
          <i className="fas fa-spinner fa-pulse iframe-preloader"></i>
        </div>
      ) : null}
    </>
  );
};

export default Payment;
