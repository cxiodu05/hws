import * as mysql from 'mysql'

export function _connection_pool_init(database_name: string): mysql.Pool {
    return mysql.createPool({
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: 'hanser05',
        database: database_name,
        port: 3306,
    })
}

export function get_connection(pool: mysql.Pool): Promise<mysql.PoolConnection> {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {  
            if (err) reject(err);
            else resolve(connection);
        })
    })
}