import process from 'node:process'
import { join } from 'node:path'
import { createRouter } from '@enhance/arc-plugin-enhance/src/http/any-catchall/index.mjs'

export default function plugin (fastify, { quiet }, done) {
  if (!quiet) console.log('E N H A N C I N G')

  fastify.get(
    '/*',
    async ({ query, body, params, headers, method, url }, reply) => {
      const router = createRouter(join(process.cwd(), 'app'))
      const context = {}
      const event = {
        query,
        body,
        params,
        headers,
        method,
        url,
        path: url,
        rawPath: url,
        httpMethod: method,
      }

      // @ts-ignore
      const res = await router(event, context)

      reply.headers(res.headers)
      reply.send(res.body)
    },
  )

  done()
}
