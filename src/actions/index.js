export const fetchNowPlayingMovie = () => {
  return async (dispatch) => {
    const api_key = "c3cea5dfe524b09cb4548284a077e8f0";
    let fetch_movies = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    );
    fetch_movies = await fetch_movies.json();
    fetch_movies = await fetch_movies.results;
    dispatch({ type: "Fetch_Now_Playing_Movie", payload: fetch_movies });
  };
};

export const fetchUpcomingMovie = () => {
  return async (dispatch) => {
    // let fetch_movies = await fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    // );
    const api_key = "c3cea5dfe524b09cb4548284a077e8f0";
    let fetch_movies = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
    );
    fetch_movies = await fetch_movies.json();
    fetch_movies = await fetch_movies.results;
    dispatch({ type: "Fetch_Upcoming_Movie", payload: fetch_movies });
  };
};
