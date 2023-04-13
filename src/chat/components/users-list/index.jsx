import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchUser from './search-user';
import User from './user/index'
import './index.scss';

const UserList = () => {

    const [users, setUsers] = useState([])

    const getUserList = async () => {
        const {data} = await axios.get("http://localhost:3001/users");
        console.log(data)
        setUsers(data.reverse())
    }

    useEffect(()=> {
        getUserList()
    },[])

    return (
        <section className="discussions">
            <SearchUser/>
            {users.map((i,idx) => <User key={idx} name={i.userName}/>)}
          </section>
    )
}

export default UserList;
