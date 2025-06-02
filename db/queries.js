const db = require('./pool');

async function getAllTableInfo(table) {
    const {rows} = await db.query('SELECT * FROM $1', [table]);
}

async function insertIntoTable(table, column, data){
    await db.query("INSERT into $1 ($2) VALUE $3",[table, column, data])
}

module.exports = {
    getAllTableInfo,
    insertIntoTable
}