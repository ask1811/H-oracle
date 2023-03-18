import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div>

            <div className="content">
                <form name="my" onSubmit="usePage(this,event)" action="" class="form">
                    <h2>Log In</h2>
                    <div className="input-group">
                        <input type="text" name="email" id="loginUser" />
                        <label for="loginUser">E-mail</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            id="loginPassword"

                            required
                        />
                        <label for="loginPassword">Password</label>
                    </div>

                    {
                        <button type="submit" className="submit-btn" onClick={(e) => {
                            e.preventDefault();
                        }}>Login</button>
                    }

                </form>
                <a className='sig' href="/signup" target="_self">Click here to signup</a>


            </div>
        </div>
    )
}

export default Login
