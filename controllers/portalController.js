const db = require('../db/queries');


exports.homepageGet = (req, res) => {
    res.render('homepage')
}
