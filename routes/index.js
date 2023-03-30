const express               =       require('express');
const router                =       express.Router();


router.get('/a',function(req,res){
    res.send('hey!');
})
console.log('Router Loaded!');

module.exports=router;