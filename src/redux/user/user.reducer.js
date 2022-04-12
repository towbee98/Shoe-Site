import { userActionTypes } from "./user.types";

const initial_State = {
  currentUser: null,
};

const userReducer = (state = initial_State, action) => {
  if (action.type === userActionTypes.SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.payload,
    };
  } else return state;
};

export default userReducer;
