import { useState } from 'react';
import { useStyles } from './rewardStyle';
import {
  REWARDID,
  REWARDCREDITSSMALL,
  CASHCARD,
  ACTIVATE,
  FUND,
  REWARDCASHBALANCE,
} from '../../../config/configHandler';
const RewardCard = props => {
  const { id, reward_id, credit, cash, imgSrc, isLogin } = props;
  const classes = useStyles(props)();

  const [imgLoading, setImgLoading] = useState<boolean>(true);

  const onCardClick = function () {
    props.onClicks(id);
  };
  const imgLoadHander = () => {
    setImgLoading(false);
  };

  return (
    <div className={classes.cardContainer} onClick={onCardClick}>
      <img
        className={classes.cardImg}
        alt="img"
        src={imgSrc}
        onLoad={imgLoadHander}
      ></img>
      {reward_id && (
        <>
          <p className={classes.idLabel}>{REWARDID}</p>
          <p className={classes.idValue}>{reward_id}</p>
        </>
      )}
      {credit && (
        <>
          <p className={classes.creditLabel}>{REWARDCREDITSSMALL}</p>
          <p className={classes.creditValue}>{credit}</p>
        </>
      )}
      {cash && (
        <>
          <p className={classes.cardTitle}>
            <strong>{CASHCARD}</strong>
          </p>
          {!isLogin ? (
            <p className={classes.creditLabel}>
              {ACTIVATE} <br />
              {FUND}
            </p>
          ) : (
            <>
              <p className={classes.creditLabel}>{REWARDCASHBALANCE}</p>
              <p className={classes.creditValue}>${cash}</p>
            </>
          )}
        </>
      )}
      {imgLoading ? (
        <div className="spinner-container">
          <i className="fas fa-spinner fa-pulse iframe-preloader"></i>
        </div>
      ) : null}
    </div>
  );
};
export default RewardCard;
