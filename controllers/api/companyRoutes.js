
console.log("comp-beg")
const router = require('express').Router();
const { Company } = require('../../models');
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
        res.status(200).json(CompanyData)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
console.log("comp-end")
module.exports = router;