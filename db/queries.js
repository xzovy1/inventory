const db = require('./pool');

exports.getCategories = async (req, res) => {
    const {rows} = await db.query('SELECT * FROM categories');
}