const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Yelpcamp');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to MongoDB"));
db.once('open',function(){
    console.log("connected to Database:: MongoDB");
})

module.exports=db;
