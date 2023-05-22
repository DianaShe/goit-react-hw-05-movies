import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/APIService';
import { Img, Subtitle } from './MovieCast.styled';

export default function MovieCast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast(id) {
      const response = await getMovieCast(id);
      setMovieCast(response.cast);
    }
    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCast.map(actor => {
          return (
            <li key={actor.credit_id}>
              <Img src={actor.profile_path} alt={actor.name} />
              <Subtitle>{actor.name}</Subtitle>
              <Subtitle>Character: {actor.character}</Subtitle>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
