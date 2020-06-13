import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'

export default {
  Query: {
    users: combineResolvers(
        isLoggedIn,
        isAdmin,
        (root, args, { models: { User } }) => {
          return User.findAll()
        },
    ),
  },
}
