import React, {useState} from 'react'
import '../authentication.css'
import {FaEnvelope, FaLock} from 'react-icons/fa';
import loginImage from '../../../Assets/Images/login-image.png'
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { signUp } from '../../../Redux/Actions/Authentication';
import { api } from '../../../Api/sourceApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

  const [register, setRegister] = useState({
    username : "",
    email : "",
    password : ""
  })

  const dispatch = useAppDispatch()

  const store = useAppSelector(state => state)

  const navigate = useNavigate()


  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget

    setRegister(prevData => ({ 
      ...prevData,
      [name] : value
    }))

  }

  const handleClick = async () => {
    dispatch(signUp(register))

    await axios.post(api + '/register' , register)
    .then(res => {
      console.log(res)
    const validate = () => {

      navigate('/login')
      
      }

      if(validator.isEmail(register.email) && validator.isStrongPassword(register.password)){
        toast.success('User register successfully !', {
          position: toast.POSITION.TOP_RIGHT,
          className : 'toast-message'
      })

      setTimeout(
        validate
      ,2000)
    }
    else{
      toast.error('Email and Password needs to be valid !',{
        position : toast.POSITION.TOP_RIGHT,
        className : 'toast-message'
      })
    }
        
    })

    .catch(err => toast.error('Enter valid data !', {
      position : toast.POSITION.TOP_RIGHT
    }))

  }

  localStorage.setItem('login', store.AuthReducer)
  // console.log(store.AuthReducer.login)

  return (

    <div className='main-signup'>

        <div className='toastify'>
        <ToastContainer />
        </div>

        <div className='signup  ' >

          <div className='signup-form' >

            <div className='signup-heading bg-white' >
              <h2 className='bg-white' >Admin Panel</h2>
            </div>

            <div className='bg-white'>
              <h4 className='bg-white'>Welcome</h4>
              <p className='bg-white text-secondary'>Enter your email address and password to access admin panel.</p>
            </div>

          <div className='signup-data' >

                <div className='signup-inputs' >
                  <label htmlFor="username" className='signup-label' id='user-name' >Username</label>
                  <div className="input-group mb-3" id='user-name'>
                    <span className="input-group-text bg-dark " id="basic-addon1"><FaEnvelope className='text-light bg-dark' /></span>
                    <input type="text" className="form-control" id='username' placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name='username' value={register.username} onChange={handleChange} />
                  </div>
                </div>

                <div className='signup-inputs' >
                  <label htmlFor="email" className='signup-label' id='email-address' >Email Address</label>
                  <div className="input-group mb-3" id='email-address'>
                    <span className="input-group-text bg-dark " id="basic-addon1"><FaEnvelope className='text-light bg-dark' /></span>
                    <input type="text" className="form-control" id='email' placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1" name='email' value={register.email} onChange={handleChange} />
                  </div>
                </div>   

                <div className='signup-inputs' >
                  <label htmlFor="password" className='signup-label' id='pass-word' >Password</label>
                  <div className="input-group flex-nowrap" id='pass-word'>
                    <span className="input-group-text bg-dark" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                    <input type="password" id='password' className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" name='password' value={register.password} onChange={handleChange} />
                  </div>
                </div>
          </div>

          <div className='bg-white signup-btn'>
            <button className='signup-btn btn bg-dark text-white mt-5' onClick={handleClick} >Sign Up</button>
          </div>
          
          </div>

          <div className='signup-image'>
            <img src={loginImage} alt="login page" className='signup-page-image' />
          </div>

        </div>

    </div>
  )
}

export default SignUp
