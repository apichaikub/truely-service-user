import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn } from '../../authorization'

export default {
  Query: {
    me: combineResolvers(
        isLoggedIn,
        (root, args, { models: { User }, user }) => {
          return User.findOne({
            where: {
              userId: user.userId,
            },
          })
        },
    ),
  },
}
