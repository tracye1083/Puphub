
console.log("erv-beg")
const router = require('express').Router();
const { Review } = require('../../models');
// GET all locations
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll();
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});
console.log("rev-end")
module.exports = router;