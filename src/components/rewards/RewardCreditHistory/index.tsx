import React, { useState, useEffect } from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import {
  Listrighttext,
  Arrowtrans,
  Ceheading,
  Transubhead,
  Transactionsbody,
  useStyles,
} from './style';
import { ApiService } from '../../../services/ApiService';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import BackButton from '../../buttons/BackButton';
import { Link } from 'react-router-dom';
import { REWARDCREDITHISTORY, TRACK } from '../../../config/configHandler';
const RewardCreditHistory = ({ home }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const apiUrl = 'transactions'; /* ---Endpoint for apiurl--- */
  /* ---state to store data from api--- */
  const [data, setData] = useState<any>([]);
  /* ---state for Loader icon--- */
  const [loading, setLoading] = useState(true);
  /* ---state for Back button--- */
  const [arrow, setArrow] = useState(true);

  /* ---axios call to get data from api--- */
  useEffect(() => {
    async function response() {
      let transdata: any = await ApiService({ url: apiUrl });
      if (transdata) {
        let data_length = transdata.message.length;
        dispatch({ type: 'SHOW_DATA_SIZE', payload: data_length });
        /* ---Set the number of items to display in home page--- */
        if (home === 'home') {
          let minimaldata = transdata.message.slice(0, 2);
          setData(minimaldata);
          setArrow(false);
        } else {
          setData(transdata.message);
          setArrow(true);
        }
      }
      setLoading(false);
    }
    response();
  }, [dispatch, home]);

  const rewards =
    data.length !== 0
      ? _.map(data, item => {
          return (
            <div key={item.id}>
              <ListItem ContainerComponent="div">
                <ListItemText
                  className="transleft"
                  primary={item.LogName}
                  secondary={item.day}
                />
                <ListItemSecondaryAction className="transright">
                  <Listrighttext
                    className="transright"
                    primary={'+' + item.currency}
                    secondary={item.operation}
                  />
                  <Link to={`reward-entry/${item.id}`}>
                    <Arrowtrans edge="end" aria-label="comments">
                      <i className="fal fa-angle-right"></i>
                    </Arrowtrans>
                  </Link>
                </ListItemSecondaryAction>
              </ListItem>
              <hr />
            </div>
          );
        })
      : 'Currently no data available!';
  return (
    <Transactionsbody className={home === 'home' ? '' : 'transcontainer'}>
      <div className={classes.Div}>
        {arrow ? <BackButton cash={''} /> : ''}
        <Ceheading>{REWARDCREDITHISTORY}</Ceheading>
        <Transubhead>{TRACK}</Transubhead>
      </div>
      {loading ? (
        <div className={classes.DivStyle}>
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        rewards
      )}
    </Transactionsbody>
  );
};

export default RewardCreditHistory;
