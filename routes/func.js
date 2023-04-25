const express               =       require('express');
const router                =       express.Router();
const campModel             =       require('../models/campground');

router.post('/delete',async function(req,res){
    console.log('here ',req.body);
    let deletedCamp=await campModel.findByIdAndDelete(req.body.camp);
    console.log(deletedCamp);
    res.redirect('/');
})

module.exports=router;