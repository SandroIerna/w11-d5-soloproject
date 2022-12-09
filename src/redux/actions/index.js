export const ADD_TO_SEARCHARTIST = "ADD_TO_SEARCHARTIST";
export const ADD_TO_PLAYBAR = "ADD_TO_PLAYBAR";

export const addToSearchArtist = (artist) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: ADD_TO_SEARCHARTIST, payload: data.data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToPlayBar = (albumId, songId) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
      );
      if (response.ok) {
        let data = await response.json();
        let tracksArray = data.tracks.data;
        let filteredArray = tracksArray.filter((track) => track.id === songId);
        dispatch({ type: ADD_TO_PLAYBAR, payload: filteredArray[0] });
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
};
