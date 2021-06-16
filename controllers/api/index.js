const router = require('express').Router();
const companyRoutes = require('./companyRoutes');
const reviewRoutes = require('./reviewRoutes');
const signupRoutes = require('./signupRoutes');
const userRoutes = require('./userRoutes');

router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/signups', signupRoutes);
router.use('/users', userRoutes);

module.exports = router;