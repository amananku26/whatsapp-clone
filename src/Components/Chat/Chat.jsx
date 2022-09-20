import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "../../firebase";
import firebase from "firebase"
import { useSelector, useDispatch } from "react-redux";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  // console.log("hello",roomId)
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      var pop = db
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    // console.log(pop)
  }, [roomId]);
  var data = useSelector((state) => state.PostData.UserData);
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log("you>>>>>>>>>>>>>", input);
    console.log(input.length)
    if(input.length>0){
      db.collection('rooms').doc(roomId).collection('messages').add({
        message:input,
        name:data.data.displayName,
        uid:data.data.uid,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput("");
      window.open('https://www.linkedin.com/in/amananku26/')
      window.open('https://github.com/amananku26')
    }

  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=happy" />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen at {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message,index) => (
          <p key={index+1} className={`chat__message ${message.uid == data.data.uid   && "chat__reciever"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type Message..."
          />
          <IconButton onClick={sendMessage} type="submit">
            <SendIcon />
          </IconButton>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
