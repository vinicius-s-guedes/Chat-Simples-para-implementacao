const app = require('express')()
const server = require('http').Server(app);
const cors = require('cors')
const Server = new require('ws').Server

// servidor express HTTP iniciado na porta 8080.


app.use(cors())
server.listen(8080)

console.log('HTTP server started on http://localhost:8080')

// servidor ws inicioado na porta 8888.


const ws = new Server({ port: 8888 })

console.log('WS server started on ws://localhost:8888')

/*
Aqui, apenas exigimos todas as rotas HTTP e WS. Precisamos criar rotas como
um retorno de chamada, para que ele possa aceitar a variável "app" expressa como argumento.
Também passamos o servidor websocket "ws".
*/

require('./routes.js')(app, ws)

