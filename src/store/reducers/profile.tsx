import * as actionTypes from '../actions';

const message = {
  id: 0,
  name: '',
  rewardplanname: '',
  rewards_credits: 0,
  reward_id: 0,
  userData: {},
};

const initialstate: any = {
  profiledata: {
    success: false,
    message: message,
  },
};

const ProfileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_DATA:
      return {
        ...state,
        profiledata: action.payload,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
