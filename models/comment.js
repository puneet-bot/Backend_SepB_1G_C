const mongoose      =require('mongoose');

const commentSchema = new mongoose.Schema({
    feedback: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
}, {
    timestamps: true
});

const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;