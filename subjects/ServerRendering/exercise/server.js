/* eslint-disable no-console */
import http from 'http'
import React from 'react'

const webpackServer = 'http://localhost:8080'
const port = 8081

const createPage = () => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>My Universal App</title>
  </head>
  <body>

    <div id="app"></div>

    <script src="${webpackServer}/__build__/shared.js"></script>
    <script src="${webpackServer}/__build__/ServerRendering-exercise.js"></script>
  </body>
</html>
`

const app = http.createServer((req, res) => {
  // TODO: We'd like to render the <App> on the server
  // instead of just sending a practically empty page.
  const html = createPage()

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length
  })

  res.end(html)
})

app.listen(port, () => {
  console.log('\nOpen http://localhost:%s', port)
})
