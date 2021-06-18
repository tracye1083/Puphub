console.log("homeroutes-enter")
const router = require('express').Router();
//const passport = require('passport');
const { Company, User, Review } = require('../models');


//Code for the GET routes follows:
//Get the signup page loaded
router.get('/signup', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('signup')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get the login page loaded
router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get the logout page loaded
router.get('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy();
            //req.session.destroy();
            //return;
        }
        res.render('logout')
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get All companies for the home page listing
router.get('/', async (req, res) => {
    const companyData = await Company.findAll({});
    // Serialize data so the template can read it
    const companies = companyData.map((company) => company.get({ plain: true }));
    if (!req.session.loggedIn) {
        res.render('landingpage', { companies, loggedIN: req.session.loggedIn })
    }
    else {
        res.render('homepage', { userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
})


router.get('/addCompany', async (req, res) => {
    // const companyData = await Company.findAll({});

    // Serialize data so the template can read it
    // const companies = companyData.map((company) => company.get({ plain: true }));
    res.render('addCompany', { loggedIN: req.session.loggedIn })
})

//Code for the adding reviews:
router.get('/addReview', async (req, res) => {
    // const companyData = await Company.findAll({});

    // Serialize data so the template can read it
    //const companies = companyData.map((company) => company.get({ plain: true }));
    res.render('addReview', { loggedIN: req.session.loggedIn })
})

//Get te reviews for a specific company:
// GET the company by ID
router.get('/company/:id', async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id, {
            include: [
                {
                    model: Review,
                    attributes: [
                        'id',
                        'review_rating',
                        'review_body',
                        'review_subject',
                    ],
                },
            ],
        });

        const company = companyData.get({ plain: true });
        res.render('reviews', { company, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Get All companies for the home page listing
router.get('/companies', async (req, res) => {
    const companyData = await Company.findAll({});
    // Serialize data so the template can read it
    const companies = companyData.map((company) => company.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('companies', { companies, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }

})


console.log("homeroutes-exit")

module.exports = router