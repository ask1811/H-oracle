import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
const Home = () => {
    return (
        <>
            <div className='content'>
                <div className='container'>
                    <div className='row details'>
                        <p className=' col-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                        </p>
                        <p className='col-3 offset-1'> To check health, enter details here<button type="button" class="btn btn-danger "><a href='/Details' className='dtl'>Details</a></button></p>
                        
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Home
