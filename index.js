// npm init -y
// npm i express
// npm i ejs
// npm i mongoose
// touch index.js

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js"); //models folder ka andar chats
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public"))); //styling use krny ka liya
app.use(express.urlencoded({ extended: true })); //pass krny ka liya

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// Update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msj } = req.body; // jo textarea me type karoge
  await Chat.findByIdAndUpdate(id, { msj: msj });
  res.redirect("/chats"); // update ke baad chats page pe redirect
});

// firstroute
app.post("/chats", (req, res) => {
  let { from, to, msj } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msj: msj,
    created: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chats");
});

// new route
app.get("/chats/new", async (req, res) => {
  res.render("new.ejs");
});

// chats route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/", (req, res) => {
  res.send("root is working");
});
app.listen(8080, () => {
  console.log("App is listening");
});

// chat data
let chat1 = new Chat({
  from: "zumer",
  to: "zeba",
  msj: "Send me your exam sheets",
  created: new Date(),
});
chat1.save().then((res) => {
  console.log(res);
});
