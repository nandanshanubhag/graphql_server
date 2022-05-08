import { ApolloServer } from 'apollo-server'
import path from 'path'
import { buildSchema } from 'type-graphql'

const main = async () => {
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, 'src/graphql/**/resolvers.ts')],
    emitSchemaFile: true,
  })

  const server = new ApolloServer({
    schema,
  })

  const port = 3000

  server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
}

main()
