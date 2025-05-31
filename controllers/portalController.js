const db = require('../db/queries');

exports.loginGet = (req, res) => {
    res.render('login')
}

exports.loginPost = (req, res) => {
    //validate login
    res.redirect('/homepage')
}

exports.createUserGet = (req, res) => {
    res.render('createUser');
}

exports.createUserPost = (req, res) => {
    //validate user
    //add user to db
    res.redirect('/')
}

exports.homepageGet = (req, res) => {
    res.render('homepage')
}
