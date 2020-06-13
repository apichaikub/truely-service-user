import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    createUser(
      data: [UserCreateInput!]
    ): UserUpdateResponse!
  }
`
