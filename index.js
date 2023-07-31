import express from 'express' // package.json type:module ,
import jsontokenRoute from './routes/webtoken.js'
import tempatureRoute from './routes/weather.js'
import UserRoute from './routes/User.js'
import commentRoute from './routes/Comment.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
//connectin to db 
mongoose.connect('mongodb+srv://aishu:aishu1213@cluster0.9crai.mongodb.net/feb2023');
console.log("db is connected....")
// creatae Model 
// mongoose.model("collection name",{schema for the collection })
//const Cat = mongoose.model('Cat', { name: String });
// insert 
//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));


 // body-parser can also be used to fetch the data from the post req


// get routes
app.get("/",(req,res)=>{
    res.send("welcome..............")
})

/*app.get("/user/userfr",(req,res)=>{
    res.status(200).send({"message":"welcome"})
    console.log("hihiiiiiiiii")
})*/
// query params
app.get("/query",(req,res)=>{
   const querydata= req.query;
   console.log(querydata);
   res.send("querydata demo")
})


// route params

/*app.get("/user/:userid",(req,res)=>{
    const para=req.params

    res.send(para)
})*/
// post
/*app.post("/user",(req,res)=>{
    console.log(req.body)
    res.status(200).send("post request")
})*/



app.use("/jsontoken",jsontokenRoute)
app.use("/temparture",tempatureRoute)
app.use("/user",UserRoute)
app.use("/comment",commentRoute)
app.listen(3000, () => {
    console.log(`Example app listening on port`)
  })