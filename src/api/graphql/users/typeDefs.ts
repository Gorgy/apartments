import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-hapi';

const typeDefs: DocumentNode = gql`
  type Users {
    _id: ID!
    apartment: Int!
    firstName: String!
    lastName: String!
    account: String!
    isAdmin: Boolean
  }

  type AddUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: Users
  }

  input AddUserArguments {
    apartment: Int!
    firstName: String!
    lastName: String!
    account: String!
    isAdmin: Boolean
  }

  type Query {
    getUsers: [Users!]!
  }

  type Mutation {
    addUser(data: AddUserArguments!): AddUserResponse!
  }
`;

export default typeDefs;
