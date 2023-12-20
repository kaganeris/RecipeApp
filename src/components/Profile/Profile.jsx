import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user,setUser] = useState({})


    useEffect(() => {
        const getUserProfile = async () => {
            const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile",{
                headers:{
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
                }
            }).then(response => setUser(response.data))
        }
        getUserProfile()
    },[])


  return (
    <div>
        <img src={user.avatar} alt={user.name}/>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
    </div>
  )
}

export default Profile