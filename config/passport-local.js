const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback:true
    },
    // function(req,email, password, done){
    //     // find a user and establish the identity
    //     User.findOne({email: email}, function(err, user)  {
    //         if (err){
    //             req.flash('error',err);
    //         }

    //         if (!user || user.password != password){
    //             req.flash('error',"Invalid Username/Password");
    //             return done(null, false);
    //         }

    //         return done(null, user);
    //     });
    // }
        async function(req,email, password, done){
            try{
        // find a user and establish the identity
        console.log(email,password);
        let user=await User.findOne({email:email});
        console.log(user);
        // User.findOne({email: email})
        // .then( function(err, user)  {
        //     console.log(user);
            if (!user || user.password != password){
                // req.flash('error',"Invalid Username/Password");
                console.log('error',"Invalid Username/Password")
                return done(null, false);
            }
            return done(null, user);
        }
        catch(err){
            console.log('error in Passport Authentication',err);
        }
        // })
        // .catch((err)=>{
        //     console.log('error in Passport Authentication',err);
        // })
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);

});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    try{
        let user=User.findById(id);
        return done(null, user);

    }catch(err){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
    }
    // User.findById(id, function(err, user){
        

    // });
    
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/signin/new');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}

module.exports = passport;