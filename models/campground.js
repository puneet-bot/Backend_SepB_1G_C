const mongoose      =require('mongoose');
const multer        =require('multer');
const path          =require('path');
const AVATAR_PATH   =path.join('/uploads/camps/campgrounds');

const campSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
}, {
    timestamps: true
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    console.log('in multer',file);
      cb(null, path.join(__dirname,'..',AVATAR_PATH))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  campSchema.statics.uploadedAvatar=multer({ storage: storage }).single('campground');
  campSchema.statics.avatarPath=AVATAR_PATH;
const Camp=mongoose.model('Camp',campSchema);
module.exports=Camp;