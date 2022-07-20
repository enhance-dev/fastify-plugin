import Fastify from 'fastify'

const app = Fastify()

app.register(import('./index.mjs'))

app.listen({ port: 3000 }, console.log)
