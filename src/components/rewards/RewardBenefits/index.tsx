import React, { useState, useEffect } from 'react';
import { ApiService } from '../../../services/ApiService';
import BackButton from '../../buttons/BackButton';
import { useStyles } from './style';

const RewardBenefits = () => {
  const classes = useStyles();
  const apiUrl = 'benefits'; /* ---Endpoint for apiurl--- */
  /* ---state to store data from api--- */
  const [cards, setCards] = useState<any>([]);

  /* ---axios call to get data from api--- */
  useEffect(() => {
    const response = async () => {
      const data: any = await ApiService({ url: apiUrl });
      setCards(data.message);
    };
    response();
  }, []);

  return (
    <>
      <BackButton cash={''} />
      {cards.map((card, index) => (
        <div key={index}>
          <div className={classes.root}>
            <div className={classes.imgDiv}>
              <img alt="cards" className={classes.img} src={card.link} />
            </div>
            <div className={classes.cardName}>
              <h3>{card.name}</h3>
              <h5>{card.lock}</h5>
              <span className={classes.spanStyle}>
                <i className="fal fa-lock"></i>
              </span>
            </div>
          </div>
          <ul>
            {card.points.map((point, key) => (
              <li className={classes.li} key={key}>
                {point}
              </li>
            ))}
          </ul>
          <hr className={classes.HR} />
        </div>
      ))}
    </>
  );
};

export default RewardBenefits;
