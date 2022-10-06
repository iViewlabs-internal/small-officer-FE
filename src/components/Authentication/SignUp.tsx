import React from 'react'
import './authentication.css'
import {FaEnvelope, FaLock} from 'react-icons/fa';
import loginImage from '../../Assets/Images/login-image.png'


const SignUp = () => {
  return (
    <div className='signup  ' >

      <div className='signup-form' >

        <div className='signup-heading bg-white' >
          <h2 className='bg-white' >Admin Panel</h2>
        </div>

        <div className='bg-white'>
          <h4 className='bg-white'>Welcome</h4>
          <p className='bg-white text-secondary'>Enter your email address and password to access admin panel.</p>
        </div>

       <div>
          <div className='signup-email' >
              <label htmlFor="email" className='signup-label' id='email-address' >Email Address</label>
              <div className="input-group mb-3" id='email-address'>
                <span className="input-group-text bg-dark " id="basic-addon1"><FaEnvelope className='text-light bg-dark' /></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            

            <div className='signup-password' >
              <label htmlFor="email" className='signup-label' id='password' >Password</label>
              <div className="input-group flex-nowrap">
                <span className="input-group-text bg-dark" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                <input type="text" id='password' className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
              </div>
            </div>
       </div>

       <div className='bg-white'>
        <button className='signup-btn btn bg-dark text-white mt-5' >Log In</button>
       </div>
       
      </div>




      <div className='signup-image'>
        <img src={loginImage} alt="login page Image" className='signup-page-image' />
      </div>

    </div>
  )
}

export default SignUp
