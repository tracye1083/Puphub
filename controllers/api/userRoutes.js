
console.log("comp-beg")
const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/signup', async (req, res) => {
    try {
        console.log(`username: ${req.body.username}`)
        const userData = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            //newUser.password = newUser.encryptPassword(req.body.password);
            password: req.body.password,
            //username: req.body.username,
            //email: req.body.email,
            //password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

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

        req.session.save(() => {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.userFirstName = userData.firstName;
                req.session.loggedIn = true;
                res.render('homepage', { userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
            });
            //req.session.loggedIn = true;
            //res.render('homepage', { userFirstName: userData.firstName, loggedIN: req.session.loggedIn })
            //res
            //   .status(200)
            ///  .json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});





module.exports = router;


//router.get('/', function (req, res, next) {
//    res.render('homepage')
//})
