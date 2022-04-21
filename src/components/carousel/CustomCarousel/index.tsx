import React, { useEffect, useRef, useState } from 'react';

import _ from 'lodash';
import RewardCard from './RewardCard';
import { useSwipeable } from 'react-swipeable';

const CustomCarousel = props => {
  const { children, callback, activeCardIndex } = props;
  const [arraydata, setArraydata] = useState(children);
  const [slide, setSlide] = useState(false);
  const [cardId, setCardId] = useState(1);
  const transitionDelay = useRef(700);
  const onlyFirstDotActive: boolean = true;

  const updateClickHander = function (index) {
    let children: any = arraydata.concat(arraydata.splice(0, index));
    if (!onlyFirstDotActive) setCardId(Number(children[0].card_order));
    callback(Number(children[0].card_order));
    for (let i: any = 0; i < children.length; i++) {
      children[i].id = i;
      setArraydata(children);
    }
    setSlide(true);
    setTimeout(() => {
      setSlide(false);
    }, transitionDelay.current);
  };

  useEffect(() => {
    if (activeCardIndex > 0) {
      transitionDelay.current = 0;
      updateClickHander(activeCardIndex);
      transitionDelay.current = 700;
    }
    //eslint-disable-next-line
  }, []);

  const dotClickHandler = function (event) {
    let _id = Number(event.currentTarget.dataset.index);
    if (onlyFirstDotActive) {
      if (_id > 0) updateClickHander(_id);
    } else {
      _id = getCardIndex(_id + 1);
      if (_id > 0) updateClickHander(_id);
    }
  };
  function getCardIndex(n) {
    let newId = 0;
    arraydata.forEach((element, index) => {
      // eslint-disable-next-line
      if (Number(element.card_order) == n) newId = index;
    });
    return newId;
  }
  const cardClickHandler = function (id) {
    //console.log('Card Click', id);
    if (id > 0) updateClickHander(id);
  };

  const swipeHandler = useSwipeable({
    onSwipedLeft: eventData => handleDelta(eventData),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleDelta = eventData => {
    if (eventData.deltaX > -250) {
      updateClickHander(1);
    } else if (-251 > eventData.deltaX) {
      updateClickHander(2);
    }
  };
  const carouselitems = _.map(arraydata, (items, index) => {
    return (
      <div className={slide ? 'sliding' : ''} key={index}>
        <RewardCard
          // eslint-disable-next-line
          className={items.id != 0 ? 'inactive' : 'active'}
          onClicks={cardClickHandler.bind(this)}
          data-index={items.id}
          key={index}
          id={items.id}
          reward_id={items.reward_id}
          credit={items.reward_credit}
          cash={items.cash_credit}
          imgSrc={items.src}
          isLogin={items.isLogin}
        ></RewardCard>
      </div>
    );
  });

  const dots = _.map(arraydata, (items, index) => {
    return (
      <div
        key={index}
        data-index={items.id}
        onClick={dotClickHandler}
        id={items.card_order}
        // eslint-disable-next-line
        className={items.id != cardId - 1 ? 'inactivedots' : 'activedots'}
      ></div>
    );
  });
  return (
    <>
      <div className="wrapoutside">
        <div className="wrap" {...swipeHandler}>
          {carouselitems}
        </div>
      </div>
      <div className="dotswrap">{dots}</div>
    </>
  );
};

export default CustomCarousel;
