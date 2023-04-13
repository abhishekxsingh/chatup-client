import React from "react";
import './index.scss'


const ActiveChatHeader =() => {
  const sendTo = localStorage.getItem("sendTo");
    return (
      <div className="header-chat">
      <i className="icon fa fa-user-o" aria-hidden="true"></i>
      <p className="name">{sendTo}</p>
      <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
    </div>
  );
}

export default ActiveChatHeader;