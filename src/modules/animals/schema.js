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
  type Message {
    message: String!
  }

  type ResAnimal {
    message: String!
    data: Animal
  }

  type Mutation {
    createAnimal(name: String!, color: String!, type: String!): Message!

    updateAnimal(
      id: Int!
      name: String
      color: String
      type: String
    ): ResAnimal!

    deleteAnimal(id: Int!): Message!
  }
`;
