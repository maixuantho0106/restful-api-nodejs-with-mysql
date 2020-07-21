const mysql = require('mysql');

const conn = mysql.createConnection({
    connectTimeout: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: process.env.DATANAME
})

conn.connect((err) => {
    if(err){
        console.log('Connection database error!' + err);
    }else{
        console.log('Connection database success!');
    }
})

module.exports = conn;