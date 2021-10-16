const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    database: "digitalp",
    password: 'postgres',
    host: 'localhost',
    post: 5432
})

module.exports = pool;