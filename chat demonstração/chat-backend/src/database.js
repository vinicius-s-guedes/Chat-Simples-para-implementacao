const mysql = require('mysql');

/*
 | In this file, we connect to the database and we export the variable with a 
 | store connection in it.
 */

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
})

/*
 | We attempt to connect to the DB.
 */

connection.connect((err) => {
  if (!! err) {
    console.log('Connection to the DB has failed')
  } else {
    console.log('Successfully connected to the DB.')
  }
})

// This line means that we export the connectin variable from this "module". In
// node.js, each file is a separate module.
module.exports = connection
