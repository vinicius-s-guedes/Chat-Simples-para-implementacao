
// Usamos a conexão com o banco de dados para realizar consultas.


const db = require('./database')

// Queremos manter todas as conexões WS em um objeto, para podermos responder a elas.


const connections = {}

/*
   Exportamos o retorno de chamada das rotas com todas as rotas definidas na função. este
   Dessa forma, podemos chamar esse arquivo no script de índice e fornecê-lo com o
   instância "app" expressa junto com a instância "io" do WS.
*/

module.exports = (app, ws) => {

  app.get('/users/:user', (req, res) => {
    // ## Aqui lista todos os usuários exeto o seu ##
    const sle = db.query(`SELECT email,avatar FROM usuarios where email not like '${req.params.user}'`,
     function(error, results, fields){
      if(error) 
        res.send(error);
      else
        res.json(results);
    });


  })

  app.post('/cad', (req, res) => {
    //cadastrar o usuário, pegando valores em um json 
    let app=req.body;
    console.log('cadastrado '+app.email)
    const sle = db.query(`INSERT INTO usuarios(email, senha, avatar) VALUES('${app.email}','${app.senha}','${app.avatar}')`,
     function(error, results, fields){
      if(error) 
        res.send(error);
      else
        res.json(results);
    });


  })


  /**
  * Terminal HTTP que retorna todas as mensagens do banco de dados.
  */
  app.get('/messages/:email/:amigo', (req, res) => {
    // ## Você precisa consultar todas as mensagens no banco de dados aqui! ##
    //aqui você consulta as mensagens pegando pela requisição seu email e o email da pessoa que você quer conversar

    const sle = db.query(`call visualizar_mensagem('${req.params.email}','${req.params.amigo}')`,
     function(error, results, fields){
      if(error) 
        res.send(error);
      else
        res.json(results);
      //aqui verifica se as mensagens foram realmente enviadas
      console.log('púxou mensagem!');
    });


  })



  app.get('/user/:email/:senha', (req, res) => {
    // ## Aqui faz o login do usuário! ##
    const login = db.query(`SELECT avatar FROM usuarios WHERE email = '${req.params.email}' and senha ='${req.params.senha}'`,
     function(error, results, fields){
      if(error) 
        res.send(error);
      else
        res.json(results);
      //verifica se foi realmente autenticado no console
      console.log('autenticado');
    });

  })



 //ouvinte de conexão WS.
 ws.on('connection', (socket) => {
  console.log('New WS connection.')

     // salvar o socket.
     socket.id = Date.now()
     connections[socket.id] = socket

    // Quando uma mensagem chega pelo soquete.
    //ele pega as informaçoes que foram enviadas via json
    socket.on('message', (message) => {
      const obj = JSON.parse(message);

//console.log(obj.mensagem);
//console.log(obj.email);
//console.log(obj.amigo);

console.log(`Nova mensagem recebida via WS: [${obj.mensagem}]`)

      // ## Observe que aqui você também precisa salvar a mensagem no banco de dados!! ##
      db.query(`call enviar_mensagem('${obj.mensagem}','${obj.email}','${obj.amigo}')`)



      // No momento, oferecemos suporte apenas ao envio de mensagens em texto sem formatação. Nós passamos o
      // mensagem para todas as conexões salvas. Dessa forma, todos os clientes podem renderizar
      // a mensagem no frontend.
      const array=`{"mensagem":"${obj.mensagem}","userid":"${obj.email}","amigo":"${obj.amigo}"}`;
      Object.values(connections).forEach(conn => conn.send(array))
    })

    


    // Remova o soquete ao desconectar.
    socket.on('close', () => delete connections[socket.id])
  })
}


