import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Chat() {
  const [chat, setChat] = useState([])
  const fetchChats = async () => {
    const data = await axios.get("http://localhost:5000/api/chats");
    setChat(data.data);
  }

  useEffect(()=>{
    fetchChats();
  },[])
  return (
    <div>
      <ul>
        {
          chat.map((e)=>{
            return <li>{e.chatName}</li>
          })
        }
      </ul>
    </div>
  )
}
