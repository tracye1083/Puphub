const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Company, Review } = require('../../models');

//Get All companies for the home page listing
router.get('/companies', withAuth, async (req, res) => {
    const companyData = await Company.findAll({});
    // Serialize data so the template can read it
    const companies = companyData.map((company) => company.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('companies', { companies, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }

})

// POST (Create) a new company
router.post('/', withAuth, async (req, res) => {
    try {
        const CompanyData = await Company.create(req.body
        )
        res.render('homepage', { userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/addCompany', withAuth, async (req, res) => {
    res.render('addCompany', { loggedIN: req.session.loggedIn })
})

router.get('/search', withAuth, async (req, res) => {
    res.render('search', { loggedIN: req.session.loggedIn })
})

//Get te reviews for a specific company:
// GET the company by ID
router.get('/company/:id', withAuth, async (req, res) => {
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

router.post('/searchZipCode', withAuth, async (req, res) => {
    res.redirect('search/' + req.body.searchZipCode);
});

//Get te reviews for a specific company:
// GET the company by zipcode
router.get('/search/:zipCode', withAuth, async (req, res) => {
    try {
        const companyData = await Company.findAll({
            where: {
                zip_code: req.params.zipCode,
            },
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

        // const company = companyData.get({ plain: true });
        const companies = companyData.map((company) => company.get({ plain: true }));
        res.render('companies', { companies, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn, search: true })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;