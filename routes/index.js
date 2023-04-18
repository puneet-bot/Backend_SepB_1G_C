const express               =       require('express');
const router                =       express.Router();
const homeController        =       require('../controllers/home');

router.get('/',homeController.home);
router.use('/signup',require('./signup'))
router.use('/signin',require('./signin'))
router.use('/signout',require('./signout'))
router.get('/newCampground',function (req,res){
    res.render("Create_Camp")
});
router.post('/addCamp',function(req,res){
    console.log("kkk",req.body);
})
console.log('Router Loaded!');

module.exports=router;