const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hackaton19',
    password: 'postgres',
    port: 5432,
});

module.exports = {pool}