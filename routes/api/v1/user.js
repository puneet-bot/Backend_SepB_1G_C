const User=require('../../../models/user');
const jwt =require('jsonwebtoken');
const express       =   require('express');
const router        =   express.Router();
// const { user } = require('../../');
// const env=require('../../../config/environment')


router.post('/',async function(req,res){
    try{
        console.log(req.body.email);
        obj={
            email:req.body.email
        }
        let users=await User.findOne(obj);
        console.log(users);
        if(!users || users.password!=req.body.password){
            return res.json(422,{
                message:"Invalid Username or Password"
            })
        }
        return res.json(200,{
            message:"Sign in successfull, here is your token,Please Keep it safe.",
            data:{
                token:jwt.sign(users.toJSON(),'Yelpcamp',{expiresIn:'100000'})
            }
            //Format of token returned---- header.payload.signature
        })
    }catch(err){
        console.log(err,'hereeee');
        return res.JSON(500,{
            message:"Unauthorized."
        })
    }

});


module.exports=router;