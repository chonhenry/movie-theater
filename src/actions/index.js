export const fetchNowPlayingMovie = (api_key) => {
  return async (dispatch) => {
    // const api_key = "c3cea5dfe524b09cb4548284a077e8f0";
    let fetch_movies = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    );
    fetch_movies = await fetch_movies.json();
    fetch_movies = await fetch_movies.results;
    dispatch({ type: "Fetch_Now_Playing_Movie", payload: fetch_movies });
  };
};

export const fetchUpcomingMovie = (api_key) => {
  return async (dispatch) => {
    // const api_key = "c3cea5dfe524b09cb4548284a077e8f0";
    let fetch_movies = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
    );
    fetch_movies = await fetch_movies.json();
    fetch_movies = await fetch_movies.results;
    dispatch({ type: "Fetch_Upcoming_Movie", payload: fetch_movies });
  };
};

export const fetchMovieNews = (api_key) => {
  return async (dispatch) => {
    let fetch_news = await fetch(
      `https://newsapi.org/v2/everything?q=hollywood-movies-oscar-actor-actress&sortBy=popularity&apiKey=${api_key}`
    );
    fetch_news = await fetch_news.json();
    fetch_news = await fetch_news.articles;
    dispatch({ type: "Fetch_News", payload: fetch_news });
  };
};

// fetch single movie
export const fetchMovieDetail = (movie_id) => {
  return async (dispatch) => {
    let fetch_movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=c3cea5dfe524b09cb4548284a077e8f0`
    );
    fetch_movie = await fetch_movie.json();
    dispatch({ type: "Fetch_Movie_Detail", payload: fetch_movie });
  };
};

export const selectMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};

// fetch cast and crew
export const fetchCrewsCasts = (movie_id) => {
  return async (dispatch) => {
    let fetch_crews_casts = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=c3cea5dfe524b09cb4548284a077e8f0`
    );
    fetch_crews_casts = await fetch_crews_casts.json();
    dispatch({ type: "Fetch_Crews_Casts", payload: fetch_crews_casts });
  };
};

// fetch movie review
export const fetchMovieReview = (movie_id) => {
  return async (dispatch) => {
    let fetch_movie_review = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=c3cea5dfe524b09cb4548284a077e8f0&language=en-US&page=1`
    );
    fetch_movie_review = await fetch_movie_review.json();
    fetch_movie_review = fetch_movie_review.results;
    dispatch({ type: "Fetch_Movie_Review", payload: fetch_movie_review });
  };
};

// fetch recommendations movie
export const fetchRecommendationsMovie = (movie_id) => {
  return async (dispatch) => {
    let fetch_recommendations_movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=c3cea5dfe524b09cb4548284a077e8f0&language=en-US&page=1`
    );
    fetch_recommendations_movie = await fetch_recommendations_movie.json();
    fetch_recommendations_movie = fetch_recommendations_movie.results;
    dispatch({
      type: "Fetch_Recommendations_Movie",
      payload: fetch_recommendations_movie,
    });
  };
};

//https://api.themoviedb.org/3/movie/299536/recommendations?api_key=c3cea5dfe524b09cb4548284a077e8f0&language=en-US&page=1
