import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Watch List</h1>
        <MovieList />
        <AddMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
