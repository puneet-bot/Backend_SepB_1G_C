const mongoose=require('mongoose');

const confirmationSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    accessToken:{
        type:String
    },
    isValid:{
        type:Boolean,
        default:true
    }
}, {
    timestamps: true
});

const Confirmation=mongoose.model('Confirmation',confirmationSchema);
module.exports=Confirmation;