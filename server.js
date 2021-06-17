const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//const engine = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//const passport = require('passport');
const flash = require('connect-flash');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
//const passportCfg = require('./config/passport');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'SuperSecretSquirrel',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
app.use(session(sess));

app.use(flash());
//app.use(passport.initialize());
//app.use(passport.session());

// Inform Express.js on which template engine to use
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//add public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});