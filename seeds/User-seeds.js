const { Z_NO_FLUSH } = require('zlib');
const { User } = require('../models');

const userData = [
    {
        username: "tmctester",
        firstName: "Tester",
        lastName: "McTester",
        phone: "603-555-8899",
        address: "123 Main St",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        email: "tmctester@gmail.com",
        password: "Password"
    },


];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;