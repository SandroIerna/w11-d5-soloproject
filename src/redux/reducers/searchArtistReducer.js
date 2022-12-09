import { ADD_TO_SEARCHARTIST } from "../actions";

const initialState = { artistAlbumArray: [] };

const searchArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCHARTIST:
      return { ...state, artistAlbumArray: action.payload };
    default:
      return state;
  }
};

export default searchArtistReducer;
