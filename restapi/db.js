const Pool = require('pg').Pool;
    
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'YbCPgCrG5LdD9v9J',
    port: 5432,
}); 

    module.exports = pool;