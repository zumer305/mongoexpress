const mongoose=require("mongoose");
const Chat=require("./models/chats.js");

main().then(()=>{console.log("connection successfull");})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
let allChats=[
    {
    from:"zumer",
    to:"zeba",
    msj:"Send me your exam sheets",
    created:new Date()
},
{
    from: "ali",
    to: "ahmed",
    msj: "Bhai kal ka project bhejna",
    created: new Date()
},
{
    from: "sara",
    to: "hina",
    msj: "Class notes share kardo",
    created: new Date()
},
{
    from: "wahab",
    to: "bilal",
    msj: "Kya tum free ho aaj sham?",
    created: new Date()
},
{
    from: "hamza",
    to: "usman",
    msj: "Assignment ka deadline kab hai?",
    created: new Date()
}

];
Chat.insertMany(allChats);

