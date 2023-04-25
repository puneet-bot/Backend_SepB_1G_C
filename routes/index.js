const express               =       require('express');
const router                =       express.Router();
const homeController        =       require('../controllers/home');
const campModel          =       require('../models/campground')
router.get('/',homeController.home);
router.use('/signup',require('./signup'))
router.use('/signin',require('./signin'))
router.use('/signout',require('./signout'))
router.get('/newCampground',function (req,res){
    res.render("Create_Camp")
});
router.use('/func',require('./func'));
router.post('/addCamp',async function(req,res){
    console.log("kkk",req.body);
    let camp=await campModel.create({
        title:req.body.title,
        image:req.body.Upload2,
        price:req.body.Price,
        description:req.body.textarea,
        location:req.body.location
    })
    console.log(camp);
    return res.redirect('/');
})
console.log('Router Loaded!');

module.exports=router;