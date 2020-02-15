
//Usamos a conexão com o banco de dados para realizar consultas.


// const db = require('./database')

// Queremos manter todas as conexões WS em um objeto, para podermos responder a elas.


const connections = {}

/*
   Exportamos o retorno de chamada das rotas com todas as rotas definidas na função. este
   Dessa forma, podemos chamar esse arquivo no script de índice e fornecê-lo com o
   instância "app" expressa junto com a instância "io" do WS.
*/

module.exports = (app, ws) => {
  //Ponto de extremidade HTTP que retorna todas as mensagens do banco de dados.

  app.get('/messages', (req, res) => {
    // ## Você precisa consultar todas as mensagens no banco de dados aqui! ##
    // db.query('SELECT * FROM ...')

    res.send([])
  })

  //ouvinte de conexão WS.

  ws.on('connection', (socket) => {
    console.log('New WS connection.')

    // salvar o socket.
    socket.id = Date.now()
    connections[socket.id] = socket

    // Quando uma mensagem chega pelo soquete.
    socket.on('message', (message) => {
      console.log(`New message received via WS: [${message}]`)

      // ## Observe que aqui você também precisa salvar a mensagem no banco de dados! ##
      // db.query('INSERT INTO ...')

      // No momento, oferecemos suporte apenas ao envio de mensagens em texto sem formatação. Nós passamos o
      // mensagem para todas as conexões salvas. Dessa forma, todos os clientes podem renderizar
      // a mensagem no frontend.
      Object.values(connections).forEach(conn => conn.send(message))
    })

    // Remova o soquete ao desconectar.
    socket.on('close', () => delete connections[socket.id])
  })
}
