import React, { useState } from 'react';
import { useStyles } from './style';
import CustomCarousel from '../CustomCarousel';

interface Props {
  card_no(no: Number): void;
  profileData: any;
  cardBalance: any;
  activeCardIndex: any;
}

const CardsCarousel = (props: Props) => {
  const { card_no, profileData, cardBalance, activeCardIndex } = props;
  const [, setdata] = useState<any>(1);
  const classes = useStyles();
  const ProfileData = profileData.message;
  const CardBalance = cardBalance.message;

  const sendData = (no: number) => {
    setTimeout(() => {
      card_no(no);
    }, 500);
  };
  const handleclick = (no: number) => {
    setdata(no);
    sendData(no);
  };
  const credits = () => {
    return ProfileData.rewards_credits
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const balance = () => {
    let balance = CardBalance;
    return Number(balance).toFixed(2);
  };
  const enrolled = () => {
    return cardBalance.enrolled;
  };
  var carouselData = [
    {
      id: '0',
      card_order: 1,
      src: 'assests/rewawrdscard.svg',
      alt: 'diamond',
      reward_id: `${ProfileData.reward_id}`,
      reward_credit: `${credits()}`,
    },
    {
      id: '1',
      card_order: 2,
      src: 'assests/Cash-Card-nolabel.svg',
      alt: 'gold',
      cash_credit: `${balance()}`,
      isLogin: enrolled(),
    },
  ];

  return (
    <div className={classes.main}>
      <CustomCarousel
        callback={handleclick}
        children={carouselData}
        activeCardIndex={activeCardIndex}
      ></CustomCarousel>
    </div>
  );
};

export default CardsCarousel;
