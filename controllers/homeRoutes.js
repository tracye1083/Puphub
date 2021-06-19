console.log("homeroutes-enter")
const router = require('express').Router();
//const passport = require('passport');
const { Company, User, Review } = require('../models');

//Get All companies for the home page listing
router.get('/', async (req, res) => {
    // const companyData = await Company.findAll({});
    // Serialize data so the template can read it
    //  const companies = companyData.map((company) => company.get({ plain: true }));
    console.log("test1")
    console.log(req.session)
    if (!req.session.loggedIn) {
        res.render('landingpage', {})
    }
    else {
        console.log("test2")
        console.log(req.session)
        res.render('homepage', { userId: req.session.user_id, userFirstName: req.session.userFirstName, isAdmin: req.session.isAdmin, loggedIN: req.session.loggedIn })
    }
})

//Code for the GET routes follows:
//Get the signup page loaded
router.get('/signup', async (req, res) => {
    try {
        console.log("test3")
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        console.log("test14")
        res.render('signup')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get the login page loaded
router.get('/login', async (req, res) => {
    try {
        console.log("test15")
        console.log(req.session)
        if (req.session.loggedIn) {
            console.log(req.session)
            res.redirect('/');
            return;
        }
        console.log("test16")
        console.log(req.session)
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get the logout page loaded
router.get('/logout', async (req, res) => {
    try {
        console.log(req.session)
        if (req.session.loggedIn) {
            req.session.destroy();
            //req.session.destroy();
            //return;
        }
        console.log("test17")
        console.log(req.session)
        res.render('logout')
    } catch (err) {
        res.status(500).json(err);
    }
});



console.log("homeroutes-exit")

module.exports = router