const express = require('express')
const cors = require('cors');
const chats = require('./data/chat');
const connectDB = require('./config/db')


require('dotenv').config()


const app = express();
const PORT = process.env.PORT;
connectDB();

///middleware
app.use(cors());



app.get('/',(req,res)=>{
    res.send("API is Running");
});

app.get('/api/chats',(req,res)=>{
   res.send(chats)
});

app.use('/api/user', userRoutes)


app.get('/api/chats/:id',(req,res)=>{
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat)
 });
 




//listen
app.listen(PORT,(req,res)=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})