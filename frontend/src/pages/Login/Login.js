import React, { useState, Link } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './Login.css'

const baseURL = "https://localhost:4000/api"

const Login = () => {
    const [logdata, setData] = useState({
        email: "",
        password: ""
    })
    const addData = (e) => {
        // console.log(e.target);
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
            .post(`${baseURL}/signin`, {
                username: logdata.username,
                password: logdata.password
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.data[0]._id)
                window.location.href = "/";
            });
    }

    return (
        <div className='motham'>
            <div className='login-wrapper container'>
                <div >
                    <form name="my" class="form">
                        <h2>Log In</h2>
                        <div className="input-group">
                            <input type="text" name="email" id="loginUser" onChange={addData} value={logdata.username} required />
                            <label for="loginUser">E-mail</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                id="loginPassword"
                                onChange={addData} value={logdata.password}
                                required
                            />
                            <label for="loginPassword">Password</label>
                        </div>
                        <Input type="submit" value="Sign Up" class="submit-btn" onClick={(e) => {
                            e.preventDefault();
                            console.log(logdata);
                            signup()
                        }} />

                    </form>
                    <br />
                    <p className='sig'>Do not have an account Click Here to Signup</p>
                    <Link to="/Signup"><button classname='btn ' variant=" contained" >Click Here</button></Link>

                </div >
            </div >
        </div>
    )
}

export default Login;
