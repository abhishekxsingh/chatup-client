import React, { useState } from 'react';
import axios from 'axios';
import './index.scss'

const Register = () => {  

  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const makeRegistration = (evt) => {
    if(evt && evt.preventDefault) {
        evt.preventDefault()
    }

    const formData = new FormData(evt.target);

    const data = {}
    for(const [key, value] of formData) {
        console.log(key, value)
        data[key]= value;
    }

    if(data.password === data.confirmPassword) {
      setIsPasswordCorrect(false);
      delete data.confirmPassword;
      axios.post("http://localhost:3001/registration", data);
  
      window.location.href = "/login"
      return true;
    }

    setIsPasswordCorrect(true)

    console.log(data)

    //return redirect("http://localhost:3000/chat")
}

  return(
    <div className="main-container">
      <form className="form" onSubmit={makeRegistration}>
          <div className="headingsContainer">
            <h1 className="title">Register</h1>
          </div>
          <input className= "input" type="text" placeholder="Enter username" name="userName" id="userName" required />
          <input className= "input" type="password" placeholder="password" name="password" id="password" required />
          <input className= "input" type="password" placeholder="Enter confirmPassword" name="confirmPassword" id="confirmPassword" required />
          <div id="error">{isPasswordCorrect && "Please check your password!!"}</div>
          <button type="submit" className="button">
            <span>Signup</span>
          </button>
      </form>
    </div>
    )
}

export default Register;