import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addToPlayBarReducer from "../reducers/addToPlayBarReducer";
import searchArtistReducer from "../reducers/searchArtistReducer";

const mainReducer = combineReducers({
  searchArtist: searchArtistReducer,
  playBar: addToPlayBarReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
