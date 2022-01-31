const express= require("express")
const app =express()
const User=require("./model/user")
const router=express.Router()
const connectDb=require("./config/conect")
const { updateMany } = require("./model/user")
require("dotenv").config({path:"./config/.env"})
connectDb()
app.use(express.json())


router.get("/getAll",async(req,res)=>{
    try {
        const getUsers=await User.find()
        res.send(getUsers)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post("/createUser",async(req,res)=>{
    try {
        const crtUsers= new User(req.body)
        await crtUsers.save
        res.send({crtUsers,msg:"added with success"})
    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.put("/updateUser/:id" ,async(req,res)=>{
    try {
        const uptUser= await User.findById(req.params.id)
        const uptu = await User.updateOne({_id:req.params.id},{$set:{...req.body}})
        res.send(uptu)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.delete("/deleteUser/:id",async (req, res) => {
    try {
        const fndPersonByIdRmv = await User.findByIdAndRemove(req.params.id);;
        res.status(200).send({ fndPersonByIdRmv, msg: "delted with sccess" })
    } catch (error) {
        res.status(404).send({ error: "user is not found" });

    }
});





const port=4002
app.listen(port,(err)=>{err?console.log(err):console.log(`server is running ${port}`)})
