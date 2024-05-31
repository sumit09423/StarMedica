const connection = require('../utils/db');

const getUserById = (id, callback) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results[0]);
    });
};

const createUser = (userData, callback) => {
    connection.query('INSERT INTO users SET ?', userData, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results.insertId);
    });
};

module.exports = {
    getUserById,
    createUser,
};
