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
  console.log(data);
  return (
    <div className="App">
      <ul>
        <li>Movie</li>
      </ul>
    </div>
  );
}

export default MovieList;
