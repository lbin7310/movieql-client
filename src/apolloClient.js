import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

export default client;

// 여기는 연결하는 부분