import React from 'react'
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


function chat({name,message,profilepic,timestamp}) {
    return (
        <Link to={`/chats/${name}`}>
        <div className="chat">
           
            <Avatar className="chat_image" src={profilepic} alt="name" />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
            
        </div>
        </Link>
    )
}

export default chat
