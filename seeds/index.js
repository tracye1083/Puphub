const seedCompanies = require('./Company-seeds');
const seedReviews = require('./Review-seeds');
const seedUsers = require('./User-seeds');
console.log('\n----- HERE -----\n');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- Users  DATA SEEDED -----\n');

    await seedCompanies();
    console.log('\n----- Companies DATA SEEDED -----\n');

    await seedReviews();
    console.log('\n----- Reviews DATA SEEDED -----\n');

    process.exit(0);
};

seedAll();