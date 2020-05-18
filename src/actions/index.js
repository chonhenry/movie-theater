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
      `https://newsapi.org/v2/everything?q=hollywood-movies-actor-actress&sortBy=publishedAt&apiKey=${api_key}`
    );
    fetch_news = await fetch_news.json();
    fetch_news = await fetch_news.articles;
    dispatch({ type: "Fetch_News", payload: fetch_news });
  };
};

// new york times api for movie news
export const fetchNytMovieNews = () => {
  return async (dispatch) => {
    let fetch_news = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&sort=relevance&api-key=DKNNiw9bmEwnqFnz4VZI5V78PN1ZMBee`
    );
    fetch_news = await fetch_news.json();
    fetch_news = await fetch_news.response.docs;
    dispatch({ type: "Fetch_NYT_News", payload: fetch_news });
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

// fetch search movie
export const searchMovie = (query) => {
  return async (dispatch) => {
    let search_movie = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c3cea5dfe524b09cb4548284a077e8f0&query=${query}&language=en-US&page=1&include_adult=false`
    );
    search_movie = await search_movie.json();
    search_movie = search_movie.results;
    dispatch({
      type: "Search_Movie",
      payload: search_movie,
    });
  };
};

export const changeSearchterm = (searchTerm) => {
  return {
    type: "CHANGE_SEARCHTERM",
    payload: searchTerm,
  };
};

export const toogleBackdrop = () => {
  return {
    type: "TOGGLE_BACKDROP",
  };
};

export const selectMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};

export const selectSeats = (seat) => {
  return {
    type: "SELECT_SEATS",
    payload: seat,
  };
};

export const UnselectSeats = (seat) => {
  return {
    type: "UNSELECT_SEATS",
    payload: seat,
  };
};

export const clearSeats = () => {
  return {
    type: "CLEAR_SEATS",
  };
};

export const SetDate = (date) => {
  return {
    type: "SET_DATE",
    payload: date,
  };
};

export const SetTime = (time) => {
  return {
    type: "SET_TIME",
    payload: time,
  };
};
