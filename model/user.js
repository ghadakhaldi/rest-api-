const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    adresse: String,
    
})
const user=mongoose.model("user",UserSchema)
module.exports=user