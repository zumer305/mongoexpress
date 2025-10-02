// npm init -y
// npm i express
// npm i ejs
// npm i mongoose
// touch index.js


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chats.js"); //models folder ka andar chats




app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");





main().then(()=>{console.log("connection successfull");})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}





app.get("/",(req,res)=>{
    res.send("root is working");
});
app.listen(8080,()=>{
    console.log("App is listening");
});



// chat data 
let chat1=new Chat({
    from:"zumer",
    to:"zeba",
    msj:"Send me your exam sheets",
    created:new Date()
});
chat1.save().then((res)=>{
    console.log(res);
});

