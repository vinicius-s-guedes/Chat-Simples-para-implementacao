const mysql = require('mysql');

/*
conecte seu database
 */

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'users'
})

/*
verifica a conexão
 */

connection.connect((err) => {
  if (!! err) {
    console.log('Connection to the DB has failed')
  } else {
    console.log('Successfully connected to the DB.')
  }
})

// Esta linha significa que exportamos a variável de conexão deste "módulo"
module.exports = connection
