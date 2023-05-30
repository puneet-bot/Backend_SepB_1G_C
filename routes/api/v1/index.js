const express       =   require('express');
const router        =   express.Router();
const camp          =   require('../../../models/campground');
const passport      =   require('passport');

router.get('/camp',passport.authenticate('jwt',{session:false}),async function(req,res){
    console.log('Hi');
    let camps=await camp.find({}).sort('-createdAt');
    console.log(camps);
    return res.json(200,{
        message:"list of camps",
        camps
    })
})

router.use('/token',require('./user'));

module.exports=router;