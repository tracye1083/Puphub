const router = require('express').Router();
const companyRoutes = require('./companyRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;