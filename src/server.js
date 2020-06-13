import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'
import { getAuth } from './graphql/authorization'
import { postgreAccountDB } from './database'
import { models } from './models'
import router from './routes'
import faker from './helper/faker'

const { port } = config
const app = express()
const graphqlPath = '/graphql'
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req: { headers } }) => {
    const user = await getAuth(headers.authorization)

    return {
      user,
      models,
    }
  },
})

server.applyMiddleware({
  app,
  path: graphqlPath,
})

app.use(router)

postgreAccountDB.sync({ force: true }).then(() => {
  faker(models)
  console.log('user service sync to postgreAccountDB success.')
})

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
