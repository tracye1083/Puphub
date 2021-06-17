console.log("sgn-beg")
const router = require('express').Router();
const { Signup } = require('../../models');
// GET all locations
router.get('/signup', async (req, res) => {
    try {
        //const signUpData = await Signup.findAll();
        // res.status(200).json(signUpData);
        res.render('signup')
    } catch (err) {
        res.status(500).json(err);
    }
});
console.log("sgn-end")
module.exports = router;