// basic schema of model 

const mongoose=require("mongoose");
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true

    },
      to:{
        type:String,
        required:true

    },
      msj:{
        type:String,
        maxLength:50

    },
    created:{
        type:Date,
        required:true
    }
});
const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;