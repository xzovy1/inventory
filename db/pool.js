const { Pool } = require("pg");

module.exports = new Pool({
    host: 'localhost',
    user: process.env.PGUSER,
    database: 'book_store',
    password: process.env.PGPASSWORD,
    port: 5432,
})