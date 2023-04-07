const express               =       require('express');
const router                =       express.Router();
const homeController        =       require('../controllers/home');

router.get('/',homeController.home);
router.use('/signup',require('./signup'))
router.use('/signin',require('./signin'))

console.log('Router Loaded!');

module.exports=router;