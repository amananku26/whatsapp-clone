import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const createChat = () => {
      const roomName = prompt("Please enter name for chat")
      if(roomName){
          
      }
  };
  return !addNewChat ? (
    <div className="SidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad" />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Mesage...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
