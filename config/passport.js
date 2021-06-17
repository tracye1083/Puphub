const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;
//const secret = require('../secret/secret');
const User = require('../models/Users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, (req, username, password, done) => {
  User.findOne({ where: { username: username } }).then(user => {
    if (user) {
      return done(null, false, req.flash('error', 'A user with that username already exists in our system.'));
    }

    var newUser = new User();
    newUser.username = req.body.username;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    //newUser.password = newUser.encryptPassword(req.body.password);
    newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null); //bcrypt.hash(req.body.password, 10); //  
    // newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //return newUserData;

    console.log("maybe")
    //newUser.save((err) => {
    console.log("here")
    return done(null, newUser);
    // });
  })
}));




/*router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/