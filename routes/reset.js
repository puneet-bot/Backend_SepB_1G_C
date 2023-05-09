const express               =       require('express');
const router                =       express.Router();
const UserModel             =       require('../models/user');
const crypto=require('crypto');
const Confirmation = require('../models/confirmation');
const queue = require('../config/kue');

router.get('/forgot',function(req,res){
    res.render("forgot_password")
})

router.post('/check',async function(req,res){
    try{
    console.log(req.body);
    let user=await UserModel.findOne({email:req.body.email});
    console.log(user);
    console.log(crypto.randomBytes(20).toString('hex'));
    let cp=await Confirmation.create({
        email: req.body.email,
        accessToken: crypto.randomBytes(20).toString('hex'),
        isValid: true
    });
        let job = queue.create('reset', cp).save(function (err) {
            if (err) {
                console.log('Error in finding in err', err);
                return;
            }
            res.redirect('back');
        });
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;