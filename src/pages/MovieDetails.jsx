import MovieCard from "components/MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { getMovieByID } from "services/APIService";


export default function MovieDetails() {
  const [movie, setMovie] = useState(null)
  
  const { movieId } = useParams()
  const location = useLocation()

  const backLink = useRef(location.state?.from ?? "/")

  useEffect(() => {
    async function fetchMovieById(value) {
      const response = await getMovieByID(value);
      setMovie(response)
    }
    fetchMovieById(movieId)
  }, [movieId])
  
  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      {movie && <MovieCard movie={movie}/>}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" >Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>  
      </div>
      <Outlet />
    </div>
  )
}
