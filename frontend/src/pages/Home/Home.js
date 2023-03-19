import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
const Home = () => {
    if (localStorage.getItem("token") == "xxx") {
        return (
            <>
                <div className='content'>
                    <div className='container'>
                        <div className='row details'>
                          <div className=' col-6'>  <p >H-oracle understands that managing your health can be challenging, which is why we've developed this tool to help you detect and monitor chronic diseases from the comfort of your own home. Our goal is to empower you to take control of your health and well-being.
                                Our web app uses cutting-edge technology to analyze your symptoms and health history to provide you with accurate and personalized results. Our algorithm is designed to detect a range of chronic diseases, including diabetes, hypertension, cardiovascular disease, and more.
                                Using our web app is easy! Simply answer a few questions about your health history and current symptoms, and we'll provide you with a comprehensive report that includes information about potential chronic diseases and next steps for managing your health.
                                We believe that early detection is key to managing chronic diseases and preventing long-term health complications. We're here to support you on your health journey!
                            </p>
                            </div>
                            <div className='hodiv col-5 offset-1'> 
                                <p > To check if you have a Heart Disease, enter details here  <button type="button" class="btn btn-danger "><a href='/Details' className='dtl'>Click Here</a></button></p>
                                <p > To check if you have a Diabetes, enter details here    <button type="button" class="btn btn-danger "><a href='/Details2' className='dtl'>Click here</a></button></p>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </>
        )
    }



    else {
        return (
            <>
                <div className='content'>
                    <div className='container'>
                        <div className='row details'>
                            <p className=' col-6'>H-oracle understands that managing your health can be challenging, which is why we've developed this tool to help you detect and monitor chronic diseases from the comfort of your own home. Our goal is to empower you to take control of your health and well-being.
                                Our web app uses cutting-edge technology to analyze your symptoms and health history to provide you with accurate and personalized results. Our algorithm is designed to detect a range of chronic diseases, including diabetes, hypertension, cardiovascular disease, and more.
                                Using our web app is easy! Simply answer a few questions about your health history and current symptoms, and we'll provide you with a comprehensive report that includes information about potential chronic diseases and next steps for managing your health.
                                We believe that early detection is key to managing chronic diseases and preventing long-term health complications. We're here to support you on your health journey!
                            </p>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Home
