const express               =       require('express');
const router                =       express.Router();
const registerController    =       require('../controllers/register')

router.get('/new',registerController.signUp)
module.exports=router;