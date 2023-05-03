const express               =       require('express');
const router                =       express.Router();
const campModel             =       require('../models/campground');

router.post('/delete',async function(req,res){
    console.log('here ',req.body);
    let deletedCamp=await campModel.findByIdAndDelete(req.body.camp);
    console.log(deletedCamp);
    res.redirect('/');
});

router.post('/edit',async function(req,res){
    let updateCamp=campModel.findByIdAndUpdate(req.body.camp_id,req.body)
  .then(post => {
    if (!post) {
      console.log(`No post found with ID ${postId}`);
    } else {
      console.log(post);
    }
  })
  .catch(err => console.log(`Error: ${err}`));
  console.log(updateCamp);
  return res.redirect('/');
})
module.exports=router;