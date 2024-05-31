const mysql = require('mysql');
const config = require('./config');


const DatabaseConnection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database

})


DatabaseConnection.connect((err) => {
    if (err) {
        console.log('Error Connecting to the DataBase', err.stack);
        return;
    }
    console.log('Connected to the database as ID', DatabaseConnection.threadId);
});

module.exports = DatabaseConnection;