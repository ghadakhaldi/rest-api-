const mongoose=require("mongoose")
const connectDb =async()=>{
    try {
        await mongoose.connect(process.env.pass)
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports =connectDb