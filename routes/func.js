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
    if(req.xhr){
  console.log(req.body);

    const {title,Upload2,Price,textarea,location}=req.body;
      const updatedObject={
        title:title,
        image:Upload2,
        price:Price,
        description:textarea,
        location:location
      }
      let updateCamp=await campModel.findByIdAndUpdate(req.body.camp_id,updatedObject,{ new: true })
      // console.log("post-detail",post_detail);
      return res.status(200).json({
          data:{
              camp:updateCamp,
          },
          message:"Post Created!"
      })
  }
  // .then(post => {
  //   if (!post) {
  //     console.log(`No post found with ID ${postId}`);
  //   } else {
  //     console.log(post);
  //   }
  // })
  // .catch(err => console.log(`Error: ${err}`));
  // console.log(updateCamp);
  // return res.redirect('/');
})



router.get('/details',function(req,res){
  console.log(req.query);
})
module.exports=router;