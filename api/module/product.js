const mysql = require('../../database');

const db = {};

db.selectAll = () => {
    return new Promise((resolve, reject) => {
        mysql.query(`SELECT * FROM products`, '', (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    })
}

db.selectID = (ID) => {
    return new Promise((resolve, reject) => {
        mysql.query(`SELECT * FROM products WHERE id = ?`, (ID), (err, result) => {
            if(err) return reject(err);
            return resolve(result);
        })
    })
}

module.exports = db;