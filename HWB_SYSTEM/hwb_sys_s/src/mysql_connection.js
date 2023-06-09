"use strict";
exports.__esModule = true;
exports._connection_pool_init = void 0;
var mysql = require("mysql");
function _connection_pool_init(database_name) {
    return mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'hanser05',
        database: database_name,
        port: 3306
    });
}
exports._connection_pool_init = _connection_pool_init;
