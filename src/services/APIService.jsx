const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGUzZjFhNWMzYmU3YjcyZWM4MjA1MWE5YTM1ZTlmYiIsInN1YiI6IjY0NmE3ZGRiZjg1OTU4MDE3NDA4MzAzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c1FUz_8z8vCObT-x5HWLuwQhDIDSQZJcUHKPD0QJOTU'
  }
};

async function getTrending() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    const movies = await response.json();
    return movies
  } catch (error) {
    console.error(error);
  }
}

async function getMovieByID(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const movie = await response.json();
    
    return movie
  } catch (error) {
    console.error(error);
  }
}

async function getMovieBySearch(search) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      options
    );
    const movies = await response.json();
    return movies
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCast(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    const movieCast = await response.json();
    return movieCast
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      options
    );
    const reviews = await response.json();
    return reviews
  } catch (error) {
    console.error(error);
  }
}

export {getTrending, getMovieByID, getMovieBySearch, getMovieCast, getMovieReviews};
