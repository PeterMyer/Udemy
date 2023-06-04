import { useQuery } from '@apollo/client';
import { GET_MOVIES_QUERY } from '../queries/queries';

function MovieList() {
  const { loading, data, error } = useQuery(GET_MOVIES_QUERY);

  if (loading) return <p>Loading...</p>;

  const renderMovies = () => {
    return data?.movies?.map((movie) => {
      return <li key={movie.id}>{movie.name}</li>;
    });
  };
  return (
    <div className="App">
      <ul>{renderMovies()}</ul>
    </div>
  );
}

export default MovieList;
