import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/APIService';

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviews(id) {
      const response = await getMovieReviews(id);
      setMovieReviews(response.results);
      console.log(response.results);
    }
    fetchMovieReviews(movieId);
  }, [movieId]);
  return (
    <ul>
      {movieReviews.length > 0 ?
      movieReviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))
      : <p>There are no reviews about this film yet.</p>}
    </ul>
  );
}
