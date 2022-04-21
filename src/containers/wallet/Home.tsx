import React, { useEffect, useState, useRef } from 'react';
import { Box, Button } from '@material-ui/core';
import {
  style_viewmore,
  style,
  Rewardscards,
  Cashcardactive,
  useStyles,
} from './styles/Home';
import CardsCarousel from '../../components/carousel/CardsCarousel';
import ActivateCard from '../../components/cash/ActivateCard';
import ClickButton from '../../components/buttons/Button';
import TierCredit from '../../components/rewards/TierCredit';
import RewardCreditHistory from '../../components/rewards/RewardCreditHistory';
import RewardCardToolbar from '../../components/rewards/RewardCardToolbar';
import Transactions from '../../components/cash/Transactions';
import CashCardToolbar from '../../components/cash/CashCardToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { ApiPostService, ApiService } from '../../services/ApiService';
import { useLocation } from 'react-router';

/* Home page */
const Home = () => {
  const classes = useStyles();
  const inputElement = useRef(null);
  const [activecardstate, setActivecardstate] = useState<any>();
  const [creditdata, setCreditdata] = useState<any>();
  const [cardBalance, setCardBalance] = useState<any>();
  const dispatch = useDispatch();
  const apiUrl = 'tiercredit';
  const cardBalanceUrl = 'cardbalance';
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const cashcard = params.get('cashcard');
  var activeCardIndex = cashcard === 'true' ? 1 : 0;
  window.history.replaceState('', '', '/');
  const cardBalanceData = useSelector(
    (state: any) => state.CardBalanceReducer.cardbalance,
  );

  useEffect(() => {
    async function response() {
      await ApiService({ url: apiUrl }).then(res => {
        setCreditdata(res);
      });

      const cashCardBalance: any = await ApiPostService({
        url: cardBalanceUrl,
        data: {},
        timeOut: 30000,
      });

      if (cashCardBalance) {
        cashCardBalance.success
          ? cashCardBalance.enrolled
            ? setCardBalance(cashCardBalance)
            : setCardBalance({
                success: cashCardBalance.success,
                enrolled: cashCardBalance.enrolled,
              })
          : console.log(cashCardBalance.message);
      }
    }
    response();
  }, []);

  if (cardBalance) {
    dispatch({ type: 'CARD_BALANCE', payload: cardBalance });
  }

  if (creditdata) {
    dispatch({ type: 'PROFILE_DATA', payload: creditdata });
  }

  const card_no = (data: Number) => {
    setActivecardstate(data);
  };

  const transactiondatasize = useSelector(
    (state: any) => state.TransactionsReducer,
  );
  const data_length = transactiondatasize['showdatasize'];

  const ProfileData = useSelector(
    (state: any) => state.ProfileReducer.profiledata,
  );

  let events = [
    { type: 'TICKETING', isChecked: false },
    { type: 'TKETING', isChecked: true },
  ];

  let AllCheckedEvents = events.map(event =>
    event.type === 'TICKETING' ? { ...event, isChecked: false } : event,
  );
  let DisplayEvents = AllCheckedEvents.filter(
    event => event.isChecked === true,
  );

  console.log(DisplayEvents);
  return (
    <>
      <Box className="weblayout">
        <Rewardscards className="containerwidth" ref={inputElement}>
          {ProfileData.success && cardBalanceData.success ? (
            <CardsCarousel
              card_no={card_no}
              profileData={ProfileData}
              cardBalance={cardBalanceData}
              activeCardIndex={activeCardIndex}
            />
          ) : (
            <div className={classes.preloader}>
              <i className="fas fa-spinner fa-pulse iframe-preloader"></i>
            </div>
          )}
        </Rewardscards>
        {activecardstate === 2 ? (
          <div className="containerwidth">
            {cardBalanceData.enrolled ? (
              <div>
                <div className={`container ${classes.cashCardCotainer}`}>
                  <CashCardToolbar />
                </div>
                <div className={`boxcontainer ${classes.transactionCotianer}`}>
                  <Transactions home={'home'} />
                </div>
              </div>
            ) : (
              <Cashcardactive
                className=""
                style={{ backgroundColor: '#fff', padding: 10 }}
              >
                <ActivateCard />
                <ClickButton
                  clickUrl={'enrollment'}
                  buttonText={'get started'}
                  style={style}
                />
              </Cashcardactive>
            )}
          </div>
        ) : (
          <div className="containerwidth">
            <div className={`container ${classes.cashStyle}`}>
              <RewardCardToolbar />
              <hr />
              <TierCredit profileData={ProfileData} />
            </div>
            <Rewardscards>
              <div className={`boxcontainer ${classes.historyCotainer}`}>
                <RewardCreditHistory home={'home'} />
                {data_length >= 3 ? (
                  <ClickButton
                    clickUrl={'/reward'}
                    buttonText={'View More'}
                    style={style_viewmore}
                  />
                ) : (
                  ''
                )}
              </div>
            </Rewardscards>
          </div>
        )}
        <Button></Button>
      </Box>
    </>
  );
};

export default Home;
