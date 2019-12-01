import gql from "graphql-tag";

// Query 문 작성하는 부분

export const HOME_PAGE = gql`
    {
      movies(limit:50, rating:7) {
      id,
      title,
      genres,
      rating
    }
  }
`