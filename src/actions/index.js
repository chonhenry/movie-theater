export const fetchNowPlayingMovie = () => {
  return async (dispatch) => {
    const api_key = "c3cea5dfe524b09cb4548284a077e8f0";
    const promise = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    );
    dispatch({ type: "Fetch_Now_Playing_Movie", payload: promise });
  };
};
