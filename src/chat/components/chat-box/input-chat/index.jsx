import React, { useState } from "react";
import data from '@emoji-mart/data'
import axios from 'axios';
import Picker from '@emoji-mart/react'
import './index.scss'


const InputChatBox =() => {

  
  const [text, setText] = useState('');
  const [enableEmoji, setEnableEmoji] = useState(false);
  
  const sendText = async () => {
      const userName = localStorage.getItem("userName");
      const sendTo = localStorage.getItem("sendTo");
      const data = {message: text, sendBy: userName, sendTo};
      console.log(data);
      await axios.post("http://localhost:3001/message/send", data);
  }

    return (
      <div className="footer-chat">
      {enableEmoji && <Picker data={data} onEmojiSelect={(data) => {
        setText(text + data.native+" ")
        setEnableEmoji(false)
      }} />}
      <i className="icon fa fa-smile-o clickable" onClick={()=>{
        if(!enableEmoji) {
          setEnableEmoji(true)
          return true
        }
        
        setEnableEmoji(false)
      }} aria-hidden="true"></i>
      <input type="text" value={text} onChange={(evt)=>{
        console.log(evt.target.value)
        setText( evt.target.value)
      }} className="write-message" placeholder="Type your message here"></input>
      <i className="icon send fa fa-paper-plane-o clickable" onClick={sendText} aria-hidden="true"></i>
    </div>
  );
}

export default InputChatBox;