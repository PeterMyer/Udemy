import { gql } from '@apollo/client';

const GET_DIRECTORS_QUERY = gql`
  {
    directors {
      name
      id
    }
  }
`;

const GET_MOVIES_QUERY = gql`
  {
    movies {
      name
      genre
      id
    }
  }
`;

const ADD_MOVIE_MUTATION = gql`
  mutation ($name: String!, $genre: String!, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name
      id
    }
  }
`;

export { GET_DIRECTORS_QUERY, GET_MOVIES_QUERY, ADD_MOVIE_MUTATION };
