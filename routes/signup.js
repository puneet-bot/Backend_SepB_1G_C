const express               =       require('express');
const router                =       express.Router();
const registerController    =       require('../controllers/register')

router.get('/new',registerController.signUp);
router.post('/create',function(req,res){
    console.log('Here',req.body)
})
module.exports=router;