const express = require('express')
const cors = require('cors');
const chats = require('./data/chat');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler} = require("./middleware/errorMiddleware")

require('dotenv').config()


const app = express();
const PORT = process.env.PORT;
connectDB();

///middleware
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send("API is Running");
});

app.get('/api/chats',(req,res)=>{
   res.send(chats)
});

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)


app.get('/api/chats/:id',(req,res)=>{
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat)
 });

 app.use(notFound)
 app.use(errorHandler)

//listen
app.listen(PORT,(req,res)=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})