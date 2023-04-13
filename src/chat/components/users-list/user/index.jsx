import React from "react";
import './index.scss';

const User = (props) => {
    const {name} =props
    return (
        <div className="discussion message-active" onClick={()=>{
            localStorage.setItem("sendTo", name);
        }}>
            <div className="photo">
                <div className="online"></div>
            </div>
            <div className="desc-contact">
                <p className="name">{name}</p>
                <p className="message">9 pm at the bar if possible 😳</p>
            </div>
            <div className="timer">12 sec</div>
        </div>
    )
}

export default User;