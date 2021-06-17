const User = require('./Users');
const Company = require('./Companies');
const Review = require('./Reviews');


Company.hasMany(Review, {
    foreignKey: 'company_id',
});

Review.belongsTo(Company, {
    foreignKey: 'company_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});
module.exports = { User, Company, Review };