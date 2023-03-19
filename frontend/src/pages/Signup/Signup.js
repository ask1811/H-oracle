import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'

import './Signup.css'
const baseURL = "http://localhost:4000/api"

const Signup = () => {
    const [logdata, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const addData = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logdata,
                [name]: value
            }

        })
    }

    async function signup() {
        await axios
            .post(`${baseURL}/auth/signup`, {
                name: logdata.name,
                email: logdata.email,
                password: logdata.password
            })
            .then((response) => {
                console.log(response.data);
                window.localStorage.setItem("token", "xxx");
                window.location.href = "/";
            });
    }
    return (
        <div className='motham'>
            <div className='signup-wrapper container'>
                <div>
                    <form name="my" class="form">
                        <h2>Sign Up</h2>
                        <div className="input-group">
                            <input type="text" name="name" id="loginUser" onChange={addData} value={logdata.name} />
                            <label for="loginUser">Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="email" id="signupUser" onChange={addData} value={logdata.username} />
                            <label for="signupUser">E-mail</label>
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

                        {
                            <Input type="submit" value="Sign up" class="submit-btn" onClick={(e) => {
                                e.preventDefault();
                                console.log(logdata);
                                signup()
                            }} />
                        }

                    </form>

                </div >
            </div >
        </div>
    )
}

export default Signup
