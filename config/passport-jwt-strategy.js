const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const User=require('../models/user');
const secret=require('../config/secrets');


let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:secret.SecretAPIKey
}

passport.use(new JWTStrategy(opts,async function(jwtPayLoad,done){
    let user=await User.findById(jwtPayLoad._id);
    console.log('hdfsjh',user);
    if(user){return done(null,user);}
    else{return done(null,false);}
    
}));


module.exports=passport;