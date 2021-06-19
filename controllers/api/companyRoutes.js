console.log("comp-beg")
const router = require('express').Router();
const { Company, Review } = require('../../models');


//Get All companies for the home page listing
router.get('/companies', async (req, res) => {
    const companyData = await Company.findAll({});
    // Serialize data so the template can read it
    const companies = companyData.map((company) => company.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('companies', { companies, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }

})


// POST (Create) a new company
router.post('/', async (req, res) => {
    // create a new category
    try {
        const CompanyData = await Company.create(req.body
            /*{
            name: req.body.company_name,
            phone: req.body.company_phone,
            address: req.body.company_address,
            city: req.body.company_city,
            state: req.body.company_state,
            zipCode: req.body.company_zipCode,
            category: req.body.company_category,
            webAddress: req.body.company_webAddress,
        }*/
        )
        res.render('homepage', { userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/addCompany', async (req, res) => {
    // const companyData = await Company.findAll({});
    // Serialize data so the template can read it
    // const companies = companyData.map((company) => company.get({ plain: true }));
    res.render('addCompany', { loggedIN: req.session.loggedIn })
})

router.get('/search', async (req, res) => {
    // const companyData = await Company.findAll({});

    // Serialize data so the template can read it
    // const companies = companyData.map((company) => company.get({ plain: true }));
    res.render('search', { loggedIN: req.session.loggedIn })
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

router.post('/searchZipCode', function (req, res, next) {
    res.redirect('search/' + req.body.searchZipCode);
});

//Get te reviews for a specific company:
// GET the company by zipcode
router.get('/search/:zipCode', async (req, res) => {
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



console.log("comp-end")
module.exports = router;