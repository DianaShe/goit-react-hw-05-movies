import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'services/APIService';
import MoviesList from 'components/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const[searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('query') ?? ""

  useEffect(() => {
    if (search === '') {
       return 
    }
    async function fetchMovies(value) {
      const response = await getMovieBySearch(value);
      console.log(response);
      if (response.success === 'false') {
        setMovies([])
        return
      }
       setMovies(response.results) 
    }
    fetchMovies(search);
  }, [search]);

  const changeSearch = value => {
    const nextParams = value !== "" ? {query: value} : {};
    console.log(nextParams)
    setSearchParams(nextParams)
  }

  return (
    <section>
      <SearchBar onSubmit={changeSearch}/>
      <MoviesList movies={movies} />
    </section>
  );
}
