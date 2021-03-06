import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:movie_id" component={Detail} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
