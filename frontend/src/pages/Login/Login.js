import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

const Login = () => {
    return (

        <div className='login-wrapper container'>
            <div >
                <form name="my" class="form">
                    <h2>Log In</h2>
                    <div className="input-group">
                        <input type="text" name="email" id="loginUser" required />
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
                <br />
                <p className='sig'>Do not have an account</p>
                <Link to="/Signup"><button classname='btn ' variant=" contained" >Click Here</button></Link>

            </div >
        </div >
    )
}

export default Login;
