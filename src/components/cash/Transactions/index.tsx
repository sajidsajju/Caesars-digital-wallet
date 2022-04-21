import React, { useState, useEffect } from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Listrighttext,
  Iconarrow,
  Ceheading,
  Seeall,
  Transactionsbody,
  transStyle,
  useStyles,
} from './style';
import { ApiService } from '../../../services/ApiService';
import BackButton from '../../buttons/BackButton';
import { TRANSACTIONS, SEEALL } from '../../../config/configHandler';

interface Props {
  home: string;
}

/* Cash Card Transactions */

const Transactions = (props: Props) => {
  const { home } = props;
  const classes = useStyles();

  const dispatch = useDispatch();
  /* ---state to store data from api--- */
  const [data, setData] = useState<any>([]);

  /* ---state for Loader icon--- */
  const [loading, setLoading] = useState(true);

  /* ---state for Back button--- */
  const [arrow, setArrow] = useState(true);

  /* ---Endpoint for apiurl--- */
  const apiUrl = 'transactions';

  useEffect(() => {
    async function response() {
      const transdata: any = await ApiService({ url: apiUrl });
      if (transdata) {
        let data_length = transdata.message.length;
        dispatch({ type: 'SHOW_DATA_SIZE', payload: data_length });
        /* ---Set the number of items to display in home page--- */
        if (home === 'home') {
          let minimaldata = transdata.message.slice(0, 3);
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

  const transactions =
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
                    primary={'$' + item.currency}
                    secondary={item.operation}
                  />
                  <Iconarrow edge="end" aria-label="comments">
                    <i className="fal fa-angle-right"></i>
                  </Iconarrow>
                </ListItemSecondaryAction>
              </ListItem>
              <hr />
            </div>
          );
        })
      : 'Currently no data available!';

  return (
    <Transactionsbody
      style={transStyle}
      className={home === 'home' ? '' : 'transcontainer'}
    >
      <div>
        {arrow ? <BackButton cash={'cash'} /> : ''}
        <Ceheading>{TRANSACTIONS}</Ceheading>
        {home === 'home' ? (
          <Link to="/transactions">
            <Seeall>{SEEALL}</Seeall>
          </Link>
        ) : (
          ''
        )}
      </div>
      {loading ? (
        <div className={classes.divStyle}>
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        transactions
      )}
    </Transactionsbody>
  );
};

export default Transactions;
