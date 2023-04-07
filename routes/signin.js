const express               =       require('express');
const router                =       express.Router();
const registerController    =       require('../controllers/register')
router.get('/new',registerController.signIn);
router.post('/enter',function(req,res){
    console.log('here',req.body);
});
module.exports=router;