import React, {useState, useEffect} from "react";
import axios from 'axios';
import './index.scss';


// const Messages = (props) => {
//   const {userName} = props


//   const [messages, setMessage] = useState([])

//   const getMessageList = async () => {
//       const {data} = await axios.get("http://localhost:3001/messages");
//       console.log(data)
//       setMessage(data)
//   }

//   useEffect(()=> {
//     getMessageList()
//   },[])


//   console.log(messages)

const Messages = (props) => {
  const {userName} = props

  const [messages, setMessage] = useState([])

  const getMessageList = async () => {
    const {data} = await axios.get("http://localhost:3001/messages");
    console.log(data)
    setMessage(data)
  } 

  useEffect(() => {
    getMessageList()
  },[])


  console.log(messages)

    
  return ( 
    <div className="messages-chat">
      {messages.map(i=> {
      console.log(i)
      const {message, sendBy} = i;
      return (
        <>
          <div className="message">
            <div className="photo">
              <div className="online"></div>
            </div>
          </div>
          <p className="time"> 14h58</p>
          {userName !== sendBy ? <div className="message text-only">
            <div className="response">
              <p className="text"> {message}</p>
            </div>
          </div> :   <div className="message text-only">
              <p className="text"> {message}</p>
          </div>}
        </>
      )
    })}
    </div>
    );
}


export default Messages;
