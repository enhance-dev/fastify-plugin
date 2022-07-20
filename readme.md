# `@enhance/fastify-plugin`

Render custom elements with file based routing.

## Setup

Install with `npm install @enhance/fastify-plugin`, and `app.register` per the example below.

```javascript
import Fastify from 'fastify'
import Enhance from '@enhance/fastify-plugin'

const app = Fastify()

app.register(Enhance)

app.listen({ port: 3000 }, console.log)
```

## File based routing 

Look at `./app` and `./preview.mjs` in this repo for an example. Learn more at [enhance.dev](https://enhance.dev).
