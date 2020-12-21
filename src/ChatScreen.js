import React, { useState } from 'react'
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() { 
    const [input, setInput]=useState('');
    const handleClick =(e) =>{    
            e.preventDefault();
        setMessages([...messages, {message:input}]); 
        setInput('');
    }
    const[messages,setMessages] =useState([
        {name :"Kriti",
            image:"https://gumlet.assettype.com/nationalherald%2F2020-05%2Ffd07a384-36f8-40f1-aa1a-4501f2ec8e70%2F816720_kriti_sanon.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&w=400&dpr=2.6",
            message :"hey, whats up"

        },
        {name :"Kriti",
            image:"https://gumlet.assettype.com/nationalherald%2F2020-05%2Ffd07a384-36f8-40f1-aa1a-4501f2ec8e70%2F816720_kriti_sanon.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&w=400&dpr=2.6",
            message :"how it going"

        },
        {
              message :"hey, how are you"

        }
    ]);
    return (
        <div className="chatScreen">
         <h2>chat</h2>   
         <p className="chatscreen__timestamp">You matched with Kriti on 1/1/2121</p>
         {messages.map((message) =>(
             message.name ? (
                <div className="chatscreen__message">
                <Avatar className="chatscreen_image" src={message.image} alt={message.name} />   
               <p className="chatscreen__text">{message.message}</p>
               </div>
             ) : (
                <div className="chatscreen__message">
                 <p className="chatscreen__usertext">{message.message}</p>
               </div>
             )
            
         ))}
         <form className="chatscreen__form">
             <input value={input} 
             onChange ={e=>setInput(e.target.value)} placeholder="type messages...." className="chatscreen__input" type="text" />
             <button className="chatscreen__submit" type ="submit" onClick={handleClick} >SEND</button>
         </form>
        </div>
        
    )
}

export default ChatScreen
