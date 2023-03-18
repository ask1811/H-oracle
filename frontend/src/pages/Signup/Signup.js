import React from 'react'
import './Signup.css'
const Signup = () => {
    return (
        <div>

            <div className="content1">
                <form name="my" onSubmit="usePage(this,event)" action="" class="form">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" name="name" id="loginUser" />
                        <label for="loginUser">Name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="email" id="signupUser" />
                        <label for="signupUser">E-mail</label>
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

            </div>
        </div>
    )
}

export default Signup
