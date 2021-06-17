console.log("API-index-enter")
const router = require('express').Router();
const companyRoutes = require('./companyRoutes');
const reviewRoutes = require('./reviewRoutes');
const signupRoutes = require('./signupRoutes');
const userRoutes = require('./userRoutes');

router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/signup', signupRoutes);
router.use('/users', userRoutes);

module.exports = router;