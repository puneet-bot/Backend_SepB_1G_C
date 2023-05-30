const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const User=require('../models/user');
const secret=require('../config/secrets');


let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:secret.SecretAPIKey
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
    console.log('here in JWT Strategy')
    User.findById(jwtPayLoad._id,function(err,user){
        console.log('user', user);
    if(err){console.log(err); return;}
    if(user){return done(null,user);}
    else{return done(null,false);}
    })
    
}));


module.exports=passport;