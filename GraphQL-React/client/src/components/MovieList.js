import { gql, useQuery } from '@apollo/client';

const GET_MOVIES_QUERY = gql`
  {
    movies {
      name
      genre
      id
    }
  }
`;

function MovieList() {
  const { loading, data, error } = useQuery(GET_MOVIES_QUERY);

  if (loading) return <p>Loading...</p>;

  const renderMovies = (data) => {
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
