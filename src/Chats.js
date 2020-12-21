import React from 'react'
import Chat from "./Chat";
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Alexandra"
            message="hey, how are you  😍"
            profilepic="https://img.mensxp.com/media/content/2020/Sep/Indian-Guy-Shares-Picture-With-Alexandra-Daddario-1200x900_5f6dd29c7c670_1200x900.jpeg" 
            timestamp="40 min ago"/>
            <Chat
            name="Kathrine"
            message="whats up 😎😎"
            profilepic="https://ca-times.brightspotcdn.com/dims4/default/a5b48b2/2147483647/strip/true/crop/1022x575+1+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3e%2F2d%2Ff26cc93ee4efe17cb2c08b302553%2Fla-1493769693-y2hijrvuw2-snap-image" 
            timestamp="20 min ago"/>
            <Chat
            name="Kriti"
            message="Kaisan ba"
            profilepic="https://gumlet.assettype.com/nationalherald%2F2020-05%2Ffd07a384-36f8-40f1-aa1a-4501f2ec8e70%2F816720_kriti_sanon.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&w=400&dpr=2.6" 
            timestamp="15 min ago"/>
            <Chat
            name="Kathrine"
            message="whats up 😎😎"
            profilepic="https://pbs.twimg.com/profile_images/1256500530244960257/Gf0oz7A7.jpg" 
            timestamp="20 min ago"/>
            {/* <Chat
            name="Kathrine"
            message="whats up 😎😎"
            profilepic="" 
            timestamp="20 min ago"/> */}
            
            
        </div>
    )
}

export default Chats
