export const fetchNowPlayingMovie = () => {
  return async (dispatch) => {
    const api_key = "c3cea5dfe524b09cb4548284a077e8f0";
    let promise = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    );
    promise = await promise.json();
    promise = await promise.results;
    dispatch({ type: "Fetch_Now_Playing_Movie", payload: promise });
  };
};
