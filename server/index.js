const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  var PORT = process.env.PORT || 8080;
  const HOST = process.env.HOST || '0.0.0.0';

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(PORT, HOST)

  console.log(`api is running on`, app);
  console.log(`and listens to ${HOST}:${PORT}`);
}
start()
