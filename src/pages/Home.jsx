import { useState, useEffect } from 'react';
import MoviesList from 'components/MovieList';
import {getTrending} from 'services/APIService';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const films = await getTrending();
      setMovies(films.results)
    }
    fetchMovies();
  }, []);
  return (
      <section>
        <h2>Trending movies</h2>
        <MoviesList movies={movies} />
      </section>
      
  ) 
}
