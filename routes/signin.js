const express               =       require('express');
const router                =       express.Router();
const registerController    =       require('../controllers/register');
const passport              =       require('../config/passport-local');


router.get('/new',registerController.signIn);


router.post('/enter',passport.authenticate(
    'local',
    {failureRedirect: '/signin/new'},
),function(req,res){
    console.log('success','Signed In Successfully');
    res.redirect('/')
});
module.exports=router;