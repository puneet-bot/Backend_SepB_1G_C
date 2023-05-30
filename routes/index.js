const express               =       require('express');
const router                =       express.Router();
const homeController        =       require('../controllers/home');
const campModel          =       require('../models/campground')
const path                  = require('path');
router.get('/',homeController.home);
router.use('/signup',require('./signup'))
router.use('/signin',require('./signin'))
router.use('/signout',require('./signout'))
router.use('/reset',require('./reset'));
router.use('/api',require('./api'));
router.get('/newCampground',function (req,res){
    res.render("Create_Camp")
});
router.use('/func',require('./func'));
router.post('/addCamp',async function(req,res){
    console.log("kkk",req.body);
    campModel.uploadedAvatar(req,res,async function(err){
        console.log('here in function')
        if(err){
            return console.log('***MULTER Error',err);
        }
        if(req.file){
            // if(user.avatar){
            //   fs.unlinkSync(path.join(__dirname,'..',user.avatar))   
            // }
            // user.avatar=User.avatarPath+'/'+req.file.filename;
            console.log("file",req.file.filename);
        }
        let camp=await campModel.create({
            title:req.body.title,
            image:(req.file)?campModel.avatarPath+'/'+req.file.filename:req.body.Upload2,
            price:req.body.Price,
            description:req.body.textarea,
            location:req.body.location
        })
        console.log(camp);
        // user.save();
        // console.log(user);
        // return res.redirect('back');
    })

    return res.redirect('/');
})
console.log('Router Loaded!');

module.exports=router;


// http://localhost:8000/api/v1/camp