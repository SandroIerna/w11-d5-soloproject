import { ADD_TO_PLAYBAR } from "../actions";

const initialState = { playBar: [] };

const addToPlayBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYBAR:
      return { ...state, playBar: action.payload };
    default:
      return state;
  }
};

export default addToPlayBarReducer;
