import React, { useState } from "react";
import InputChatBox from "./input-chat";
import ActiveChatHeader from "./active-chat-detail"
import Messages from "./messages"
import './index.scss';

const ChatBox = () => {

    const [userName] = useState(localStorage.getItem("userName"));

    return (
        <section className="chat">
          <ActiveChatHeader/>
          <Messages userName={userName}/>
          <InputChatBox/>
        </section>
    )
}

export default ChatBox;