import React from 'react';
import ChatBox from './components/chat-box';
import SideNavigation from './components/side-navigation';
import UserList from './components/users-list';
import './index.scss'

const  Chat = () => {
  return(
      <div className="container">
        <div className="flex">
          <SideNavigation/>
          <UserList/>
          <ChatBox/>
        </div>
      </div>
    
    )
}

export default Chat;