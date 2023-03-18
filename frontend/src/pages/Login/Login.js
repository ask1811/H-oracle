import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    return (
        
        <div className='login-wrapper container'>
            <div className="content ">
                <form name="my" class="form">
                    <h2>Log In</h2>
                    <div className="input-group">
                        <input type="text" name="email" id="loginUser" required/>
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
                    <button type="submit" className="submit-btn" >Login</button>                 

                </form>
                <br/>
                <a className='sig' href="/signup" target="_self">Click here to signup</a>
            </div>
        </div>
    )
}

export default Login;
