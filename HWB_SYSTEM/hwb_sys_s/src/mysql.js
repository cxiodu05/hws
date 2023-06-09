"use strict";
exports.__esModule = true;
exports.get_connection = exports._connection_pool_init = void 0;
var mysql = require("mysql");
function _connection_pool_init(database_name) {
    return mysql.createPool({
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: 'hanser05',
        database: database_name,
        port: 3306
    });
}
exports._connection_pool_init = _connection_pool_init;
function get_connection(pool) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err)
                reject(err);
            else
                resolve(connection);
        });
    });
}
exports.get_connection = get_connection;
