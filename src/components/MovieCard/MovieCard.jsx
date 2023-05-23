import { Container, Title } from "./MovieCard.styled";

export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres, } =
    movie;
  const url = `https://image.tmdb.org/t/p/w200${poster_path}`
  const movieGenres = genres.map(genre => genre.name);
  return (
    <Container>
      <img src={url} alt={title} />
      <div>
        <Title>{title}</Title>
        <Title>({release_date.slice(0, 4)})</Title>
        <p>User score: {Math.round(vote_average * 10)} %</p>
        <h4>Overview:</h4>
        <p>{overview}</p>
        <h4>Genres: </h4>
        <p>{movieGenres.join(', ')}</p>
      </div>
      
    </Container>
  );
}
