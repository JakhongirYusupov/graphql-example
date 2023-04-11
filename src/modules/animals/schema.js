import { gql } from "apollo-server-core";

export default gql`
  type Animal {
    id: ID
    name: String
    color: String
    type: String
  }

  type Query {
    animals: [Animal!]
  }
`;
