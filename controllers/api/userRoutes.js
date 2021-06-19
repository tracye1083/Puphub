//These are the heavy lifting for user signup and login
console.log("comp-beg")
const router = require('express').Router();
const { User, Review } = require('../../models');

// This is the SIGNUP route, this will CREATE new user
router.post('/signup', async (req, res) => {
    try {
        console.log(`username: ${req.body.username}`)
        const userData = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });
        //Save some info into session variables for greetings and later use
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.userFirstName = userData.firstName;
            req.session.loggedIn = true;
            res.render('homepage', { userId: req.session.user_id, userFirstName: req.session.userFirstName, isAdmin: req.session.isAdmin, loggedIN: req.session.loggedIn })
        });
        console.log(req.session)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        console.log("test1A")
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        console.log("test1B")
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username. Please try again!' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password. Please try again!' });
            return;
        }
        console.log("save")
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.userFirstName = userData.firstName;
            req.session.isAdmin = userData.isAdmin;
            req.session.loggedIn = true;
            res.render('homepage', { userId: req.session.user_id, userFirstName: req.session.userFirstName, isAdmin: req.session.isAdmin, loggedIN: req.session.loggedIn })
        });
        console.log("test1D")
        console.log(req.session)


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// GET the company by ID
router.get('/user/:id', async (req, res) => {
    console.log(req.session.user_id)
    try {
        const userData = await User.findByPk(req.params.id, {
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

        const user = userData.get({ plain: true });
        res.render('user_profile', { user, isAdmin: req.session.isAdmin, loggedIN: req.session.loggedIn })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;


