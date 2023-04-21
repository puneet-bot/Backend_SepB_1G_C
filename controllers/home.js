console.log('Controller is up and Running');
const campground=require('../models/campground');

module.exports.home=async function(req,res){
    try{
    let camps=await campground.find({});
    res.render("home",{
        camps
    })
}
catch(err){
    console.log('error in home controller',err);
}
}

