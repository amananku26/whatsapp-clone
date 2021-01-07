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
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  // console.log("hello",roomId)
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (roomId) {
     var pop =  db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
    // console.log(pop)
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you>>>>>>>>>>>>>", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=happy" />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen at ...</p>
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
        <p className="chat__message chat__reciever">
          <span className="chat__name">Aman Anku</span>
          Hello aman
          <span className="chat__timestamp">3:52 PM</span>
        </p>
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
