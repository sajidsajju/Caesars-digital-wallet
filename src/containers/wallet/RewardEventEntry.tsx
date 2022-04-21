import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

import { Buttonstyle, useStyles } from './styles/RewardEventEntry';
import BackButton from '../../components/buttons/BackButton';
import { ApiService } from '../../services/ApiService';
import RewardEntry from '../../components/rewards/RewardEntry';
import ClickButton from '../../components/buttons/Button';

/* Reward Event Entry Page */
const RewardEventEntry = ({ match }) => {
  const id = match.params.id;
  const classes = useStyles();

  /* ---state to store data from api--- */
  const [data, setData] = useState<any>();

  /* ---state for Loader icon--- */
  const [loading, setLoading] = useState<any>(true);

  /* ---Endpoint for apiurl--- */
  const apiUrl = `rewardsentry/${id}`;

  useEffect(() => {
    async function response() {
      let logData: any = await ApiService({ url: apiUrl });
      if (logData.success) {
        setData(logData.message);
      } else {
        console.log(logData.message);
      }
      setLoading(false);
    }
    response();
  }, [apiUrl]);

  return (
    <>
      {!loading ? (
        <Box className="weblayout">
          <div className={`weblayoutinside ${classes.Height}`}>
            <BackButton cash={''} />
            <RewardEntry data={data} />
            <div className={classes.btnContainer}>
              <ClickButton
                buttonText={'REPORT AN ISSUE'}
                clickUrl={'#'}
                style={Buttonstyle}
              />
            </div>
          </div>
        </Box>
      ) : (
        <div className="spinner-container">
          <i className="fas fa-spinner fa-pulse iframe-preloader"></i>
        </div>
      )}
    </>
  );
};
export default RewardEventEntry;
