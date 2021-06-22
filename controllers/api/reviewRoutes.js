const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Review, Company } = require('../../models');

//Code for the adding reviews:
router.get('/addReview/:id', withAuth, async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id);

        // Serialize data so the template can read it
        const company = companyData.get({ plain: true });
        res.render('addReview', { company, loggedIN: req.session.loggedIn })

        req.session.save(() => {
            req.session.company_id = req.params.id;
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.create(//req.body
            {
                reviewSubject: req.body.subject,
                reviewBody: req.body.review,
                reviewRating: req.body.rating,
                company_id: req.session.company_id,
                user_id: req.session.user_id,
            }
        )
        console.log(`UGGG: ${req.session.company_id}`)
        res.redirect('companies/company/' + req.session.company_id) //, { userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;