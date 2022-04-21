import React, { useState, useEffect } from 'react';
import {
  Golddiv,
  Tierimg,
  Totaltier,
  Alltier,
  useStyles,
  PrettoSlider,
} from './style';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { ApiService } from '../../../services/ApiService';
import _ from 'lodash';
import { TierCards } from './service';
import { TIERCREDITS, TO } from '../../../config/configHandler';
interface Props {
  profileData: any;
}

const TierCredit = (props: Props) => {
  const classes = useStyles();
  const apirewardUrl = 'rewardcards';
  const { profileData } = props;
  const ProfileData = profileData.message;
  const getCreditsData = TierCards(ProfileData.rewards_credits);
  const rewardPlan: string = `assests/${getCreditsData.creditsCard}.svg`;
  const [rewardscardsdata, setRewardcardsdata] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const credits = (value: Number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    async function response() {
      let rewardcards: any = await ApiService({ url: apirewardUrl });
      if (rewardcards) {
        setRewardcardsdata(rewardcards.message);
      }
      setLoading(false);
    }
    response();
  }, []);
  let newdata = [];
  if (ProfileData && rewardscardsdata) {
    if (ProfileData.rewardplanname === 'Gold') {
      const filter_data = _.filter(rewardscardsdata, {
        name: 'PLATINUM',
      });
      newdata = filter_data;
    } else if (ProfileData.rewardplanname === 'Platinum') {
      const filter_data = _.filter(rewardscardsdata, {
        name: 'DIAMOND',
      });
      newdata = filter_data;
    } else if (ProfileData.rewardplanname === 'Diamond') {
      const filter_data = _.filter(rewardscardsdata, {
        name: 'SEVEN STARS',
      });
      newdata = filter_data;
    }
  }

  const tiercredit =
    newdata.length !== 0
      ? _.map(newdata, filteritem => {
          return (
            <Grid className={classes.gridStyle} key={ProfileData.id}>
              <Tierimg>
                <img alt="card" src={rewardPlan} />
              </Tierimg>
              <div>
                <Golddiv>{getCreditsData.name}</Golddiv>
                <span>
                  <strong> {ProfileData.name}</strong>
                </span>
              </div>

              <div key={filteritem.value}>
                <Link to="benefits">
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    disabled
                    defaultValue={ProfileData.rewards_credits}
                    max={filteritem.value}
                  />
                </Link>
                <div>
                  <Totaltier>
                    <b>{credits(ProfileData.rewards_credits)}</b>
                    <span className={classes.spanColor}> {TIERCREDITS}</span>
                  </Totaltier>
                  <Alltier>
                    <b>
                      {credits(filteritem.value - ProfileData.rewards_credits)}
                    </b>{' '}
                    <span className={classes.spanColor}>
                      {' '}
                      {TO} {filteritem.name}
                    </span>
                  </Alltier>
                </div>
              </div>
            </Grid>
          );
        })
      : '';

  return (
    <div>
      {loading ? (
        <div className={classes.Div}>
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        tiercredit
      )}
    </div>
  );
};

export default TierCredit;
