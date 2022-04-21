import * as actionTypes from '../actions';

const initialstate: any = {
  showdatasize: 0,
};

const TransactionsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SHOW_DATA_SIZE:
      return {
        ...state,
        showdatasize: action.payload,
      };
    default:
      return state;
  }
};

export default TransactionsReducer;
