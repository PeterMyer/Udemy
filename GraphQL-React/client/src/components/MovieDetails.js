import { useQuery } from '@apollo/client';
import { GET_MOVIE_QUERY } from '../queries/queries';

function MovieDetails({ selectedMovie }) {
  const { loading, data, error } = useQuery(GET_MOVIE_QUERY, {
    variables: { id: selectedMovie },
  });

  const renderMovieDetails = () => {
    const { movie } = data || {};

    if (movie) {
      return (
        <div>
          <h2>{movie.name}</h2>
          <p>{movie.genre}</p>
          <p>Directed by: {movie.director.name}</p>
          <p>All movies by this director:</p>
          <ul>
            {movie.director.movies.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Please Select A Movie</h3>
        </div>
      );
    }
  };

  return <div>{renderMovieDetails()}</div>;
}

export default MovieDetails;
