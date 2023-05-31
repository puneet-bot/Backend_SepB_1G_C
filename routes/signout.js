const express               =       require('express');
const router                =       express.Router();
// const passport              =       require('../config/passport-local');


// router.use('/destroy',function(req,res){
    router.post('/destroy', function(req, res) {
        console.log('logging out');
        req.logout(function(err) {
            if (err) {
                return next(err);
            }
            req.session.destroy(function(err) {
                if (err) {
                    return next(err);
                }
                res.clearCookie('Yelpcamp'); // use the name of the session cookie here
                res.redirect('/');
            });
        });
    });
    
// })


module.exports=router;