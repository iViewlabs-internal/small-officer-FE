import React, {useState} from 'react'
import '../authentication.css'
import {FaEnvelope, FaLock} from 'react-icons/fa';
import loginImage from '../../../Assets/Images/login-image.png'
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { resetPassword, signIn } from '../../../Redux/Actions/Authentication';
import axios from 'axios';
import { api } from '../../../Api/sourceApi';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const ResetPasswordEmail = () => {

  const [email, setEmail] = useState({
    email : ""
  })

  

  const dispatch = useAppDispatch()

  const store = useAppSelector(state => state)

  const navigate = useNavigate()

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setEmail(data => ({
        ...data,
        email : e.target.value
    }))
  }

  const handleClick = async () => {
    

    await axios.post(api + '/send-reset-password-email' , email)
    .then(res => {
      if(res.data.status == 'success'){
        navigate('/reset-password/id/token')
      }
    })
    .catch(err => toast.error('Enter Valid credentials',{
        position : toast.POSITION.TOP_RIGHT,
        className : 'toast-message'
      }))
  }


  console.log(email)

  return (
    <div className='main-signup'>

      <div className='tostify'>
        <ToastContainer />
      </div>

      <div className='signup' >
          <div className='signup-form' >

            <div className='signup-heading bg-white' >
              <h2 className='bg-white' >Admin Panel</h2>
            </div>

            <div className='bg-white'>
              <h4 className='bg-white'>Welcome</h4>
              <p className='bg-white text-secondary'>Enter new password to reset your password.</p>
            </div>

            <div className='signup-data' >

                <div className='signup-inputs' >
                  <label htmlFor="reset-email" className='signup-label' id='email' >Enter Email</label>
                  <div className="input-group flex-nowrap" id='email'>
                    <span className="input-group-text bg-dark input-icon" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                    <input type="email" id='reset-email' className="form-control" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" name='email' value={email.email} onChange={handleChange} />
                  </div>
                </div>

          </div>

          <div className='bg-white login-btn'>
            <button className='signup-btn btn bg-dark text-white mt-5' onClick={handleClick} >Send Email</button>
          </div>
          
          </div>

          <div className='signup-image'>
            <img src={loginImage} alt="login page Image" className='signup-page-image' />
          </div>

      </div>

    </div>
  )
}

export default ResetPasswordEmail
