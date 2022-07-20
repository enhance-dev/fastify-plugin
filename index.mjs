import { createRouter } from '@enhance/arc-plugin-enhance/src/http/any-catchall/index.mjs'
import { join } from 'path'

export default async function plugin (fastify, opts, done) {
  fastify.get('/*', async (req, reply) => {
    let {
      query,
      body,
      params,
      headers,
      method,
      url,
    } = req
    let router = createRouter(join(process.cwd(), 'app'))
    let res = await router({
      query,
      body,
      params,
      headers,
      method,
      rawPath: url,
    })
    reply.headers(res.headers)
    reply.send(res.body)
  })
  done()
}
