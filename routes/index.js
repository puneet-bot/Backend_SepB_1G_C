const express               =       require('express');
const router                =       express.Router();
const homeController        =       require('../controllers/home');

router.get('/a',homeController.home)
console.log('Router Loaded!');

module.exports=router;