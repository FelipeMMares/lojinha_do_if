const mysql = require('mysql2/promise');

//criação da conexão com banco de dados MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '#Sinuca800',
    database: 'loja',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;