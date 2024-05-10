const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    pic : {
        type : String,
        required : true,
        default : 
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },

},
{
    timestamps : true
})

const User = mongoose.model("User", userModel);
module.exports=User;