import React, { useState} from 'react'
import axios from "axios";
import './Login.css'
const Login = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    })
    const baseURL = "https://localhost:4000/api"
    const addData = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logdata,
                [name]: value
            }

        })
    }

    async function login() {
        await axios
            .post(`${baseURL}/auth/signin`, {
                email: logdata.email,
                password: logdata.password
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.data[0]._id)
            });
    }

    return (
        <div className='motham'>
            <div className='login-wrapper container'>
                <div >
                    <form name="my" class="form">
                        <h2>Log In</h2>
                        <div className="input-group">
                            <input type="text" name="email" id="loginUser" value = {logdata.email} onChange={addData} required />
                            <label for="loginUser">E-mail</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                id="loginPassword"
                                value={logdata.password}
                                onChange={addData}
                                required
                            />
                            <label for="loginPassword">Password</label>
                        </div>
                        <input type="submit" value="Sign In" class="submit-btn" onClick={(e)=>{
                            e.preventDefault();
                            login();
                            window.location.href="/"
                        }}/>

                    </form>
                    <br />
                    <p className='sig'>Do not have an account Click Here to Signup</p>
                    <a href="/signup" >Signup</a>

                </div >
            </div >
        </div>
    )
}

export default Login;
