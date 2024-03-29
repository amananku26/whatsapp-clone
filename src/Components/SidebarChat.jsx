import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  useEffect(() => {
  if(id){
    db.collection("rooms")
    .doc(id)
    .collection("messages")
    .orderBy("timestamp", 'desc')
    .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
  }
  }, []);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <> <div onClick={createChat} className="SidebarChat">
      <h2>Add New Chat</h2>
    </div>
    <div className="SidebarChat">
      <span>Follow me on <a style={{fontFamily:'bolder',color:'blue',fontSize:'15px'}} href='https://github.com/amananku26' target='_blank'>Github</a> and send me Connect request on <a style={{fontFamily:'bolder',color:'blue',fontSize:'15px'}} href='https://www.linkedin.com/in/amananku26/' target='_blank'>Linkedin</a> </span>
    </div>
    <div className="SidebarChat">
      <a style={{fontFamily:'bolder',color:'blue',fontSize:'15px'}} href='https://github.com/amananku26/whatsapp-clone' target='_blank'>Star this Repo</a>
    </div>
    </>
   
  );
}

export default SidebarChat;
