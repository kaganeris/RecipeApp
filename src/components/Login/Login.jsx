import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import styles from "./Login.module.css"



const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {login , isAuthenticated} = useContext(AuthContext)

    const navigate = useNavigate()


    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            await login(username,password)
            navigate("/")
        } catch (error) {
            alert('Login failed')
        }
    }

  return (
    <div>
        <form className={styles['login-form']} onSubmit={handleLogin}>
            <label htmlFor='username'>Username</label>
            <input value={username} id='username' onChange={e => setUsername(e.target.value)} type='text' placeholder='Username'/>
            <br/>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type='password' id='password'placeholder='Password'/>
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login