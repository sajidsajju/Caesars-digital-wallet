import * as actionTypes from '../actions';

const initialstate: any = {
  cardbalance: {
    success: false,
    message: 0,
    enrolled: false,
  },
};

const CardBalanceReducer = (state = initialstate, action: any) => {
  switch (action.type) {
    case actionTypes.CARD_BALANCE:
      return {
        ...state,
        cardbalance: action.payload,
      };
    default:
      return state;
  }
};

export default CardBalanceReducer;
