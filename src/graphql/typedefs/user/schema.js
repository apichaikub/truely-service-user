import { gql } from 'apollo-server-express'

export default gql`
  type User {
    userId: String!,
    username: String,
    role: String,
    createdAt: String,
    updatedAt: String,
  }

  type UserUpdateResponse {
    users: [User!]
  }

  input UserCreateInput {
    username: String!,
    password: String!,
    role: String!,
  }
`
