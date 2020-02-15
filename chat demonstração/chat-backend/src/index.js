const app = require('express')()
const server = require('http').Server(app);
const cors = require('cors')
const bodyParser  = require('body-parser')
const Server = new require('ws').Server

/*
 | This part boots up the express HTTP server. We listen on the port 8080.
 */

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
server.listen(8080)


console.log('HTTP server started on http://localhost:8080')

/*
 | We also boot the WS server on 8888.
 */

const ws = new Server({ port: 8888 })

console.log('WS server started on ws://localhost:8888')

/*
 | Here, we just require all HTTP and WS routes. We need to create routes as
 | a callback, so that it can accept the express "app" variable as an argument.
 | We also pass the "ws" websocket server.
 */

require('./routes.js')(app, ws)

