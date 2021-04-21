import "./App.css";
import ExchangeRates from "./components/Launches"

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <ExchangeRates />
    </ApolloProvider>
  );
}

export default App;
