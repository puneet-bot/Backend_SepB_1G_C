//require packages and declaration of constants here
const port                  =           8000;
const express               =           require('express');
const app                   =           express();
const db                    =           require('./config/mongoose');
const passport              =           require('passport');
const cookieParser          =           require('cookie-parser');
const passportLocal         =           require('./config/passport-local');
const expressLayouts        =           require('express-ejs-layouts');
const session               =           require('express-session');
const mongoStore            =           require('connect-mongo');

app.use(cookieParser());
// To parse http data
app.use(express.urlencoded({extended:false}));

// To set the static file path
app.use(express.static('Assets'));

// To access layout structure defined in the Layout.ejs file
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// To set view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//For user to store in the session once logged In 
app.use(session({
    name: 'Yelpcamp',
    // TODO change the secret before deployment in production mode
    secret: '1234test',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: mongoStore.create({
        mongoUrl: db._connectionString,
        autoRemove: 'disabled'
      })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(port,function(){
    console.log(`Server lsitening on Port: ${port}`);
})

//https://localhost:3000
// app.listen(3000,()=>{

// });
