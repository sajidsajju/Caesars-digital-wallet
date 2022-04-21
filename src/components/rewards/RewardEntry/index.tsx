import React from 'react';
import { useStyles } from './style';
import { STATUS, TOTAL } from '../../../config/configHandler';
interface Props {
  data: any;
}

const RewardEntry = (props: Props) => {
  const classes = useStyles();
  const { data } = props;
  const credits = () => {
    let credits = data.credits;
    return Number(credits).toFixed(2);
  };

  const cardNumber = data.card.substr(-4);

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <h1 className={classes.creditinfo}>+{credits()}</h1>
        <p className={classes.addressinfo}>{data.address}</p>
        <p className={classes.date}>
          {data.date}, {data.time}
        </p>
      </div>
      <div className={classes.Div}>
        <div>
          <span className={classes.status}>
            {STATUS} {data.status}
          </span>
          <span className={classes.cardnum}>**** {cardNumber}</span>
        </div>
        <div>
          <span className={classes.Name}>{data.name}</span>
        </div>
      </div>
      <hr className={classes.Hr} />
      <div className={classes.creditdiv}>
        <span className={classes.total}>{TOTAL}</span>
        <span className={classes.credit}>+{credits()}</span>
      </div>
    </div>
  );
};
export default RewardEntry;
