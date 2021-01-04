import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="SidebarChat">
            <Avatar src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad" />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Mesage...</p>
            </div>
        </div>
    )
}

export default SidebarChat
