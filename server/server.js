const express = require('express')
const cors = require('cors');
const chats = require('./data/chat');
// const connectDb = require('./config/db');
require('dotenv').config()


const app = express();
const PORT = process.env.PORT2 || 5000;

///middleware
app.use(cors());
app.use(express.json())
// connectDb();

app.get('/',(req,res)=>{
    res.send("API is Running");
});

app.get('/api/chats',(req,res)=>{
   res.send(chats)
});


app.get('/api/chats/:id',(req,res)=>{
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat)
 });
 




//listen
app.listen(PORT,(req,res)=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})