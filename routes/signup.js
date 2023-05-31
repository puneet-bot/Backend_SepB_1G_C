const express               =       require('express');
const router                =       express.Router();
const registerController    =       require('../controllers/register');
const User                  =       require('../models/user');

router.get('/new',registerController.signUp);
router.post('/create',async function(req,res){
    try {
        if (req.body.password != req.body.confirm_password){
        console.log('Error: Password and Confirm password should match');
            return res.redirect('back');
        }
        let user=await User.findOne({email: req.body.email});
        if (!user){
            let createUser= await User.create(req.body);
            console.log(createUser)
        }
        return res.redirect('/signin/new');
    }
    catch(err){
        console.log('error in finding user in signing up'); return}
})
module.exports=router;