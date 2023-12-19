var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    connectionLimit: 10,
    database: process.env.DATABASE
});

module.exports = pool;





