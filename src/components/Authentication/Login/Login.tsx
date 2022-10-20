import React, {useState} from 'react'
import '../authentication.css'
import {FaEnvelope, FaLock} from 'react-icons/fa';
import loginImage from '../../../Assets/Images/login-image.png'
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { signIn } from '../../../Redux/Actions/Authentication';
import axios from 'axios';
import { api } from '../../../Api/sourceApi';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

  const [login, setLogin] = useState({
    email : "",
    password : ""
  })



  const dispatch = useAppDispatch()

  const store = useAppSelector(state => state)

  const navigate = useNavigate()

  const da : any = localStorage.getItem('signup')

  const signupData = JSON.parse(da)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget

    setLogin(prevData => ({ 
      ...prevData,
      [name] : value
    }))

  }

  console.log(store.AuthReducer.signupData)

  const emails= []

  

  const handleClick = async () => {
    

    await axios.post(api + '/login' , login)
    .then(res => {

      console.log(res.status)

      const validate = () => {
            navigate('/')
          }

          // console.log(store.AuthReducer.signupData , store.AuthReducer.signupData.includes(login.password))

          console.log(res.data.status , 'resssssssssssssssss')
          if( res.data.status === 'success'){
            toast.success('User Loggedin successfully !',{
              position :toast.POSITION.TOP_RIGHT,
              className : 'toast-message'
            }) 
      
            dispatch(signIn(login))
              localStorage.setItem('login', JSON.stringify(login))
       
              setTimeout(
                      validate
                    ,2000)
          }
          else{
            toast.error('Enter Valid credentials',{
              position : toast.POSITION.TOP_RIGHT,
              className : 'toast-message'
            })
          }

    })
    .catch(err => toast.error('Enter Valid credentials',{
        position : toast.POSITION.TOP_RIGHT,
        className : 'toast-message'
      }))

  }

  const ResetPassword = () => {
    axios.post(api + '/send-reset-password-email' , )
    
  }

  console.log(store.AuthReducer.login)

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
              <p className='bg-white text-secondary'>Enter your email address and password to access admin panel.</p>
            </div>

            <div className='signup-data' >

                <div className='signup-inputs' >
                  <label htmlFor="Email" className='signup-label' id='email' >Email</label>
                  <div className="input-group mb-3" id='email'>
                    <span className="input-group-text bg-dark input-icon " id="basic-addon1"><FaEnvelope className='text-light bg-dark' /></span>
                    <input type="text" className="form-control" id='Email' placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" name='email' value={login.email} onChange={handleChange} />
                  </div>
                </div>

                <div className='signup-inputs' >
                  <label htmlFor="password" className='signup-label' id='pass-word' >Password</label>
                  <div className="input-group flex-nowrap" id='pass-word'>
                    <span className="input-group-text bg-dark input-icon" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                    <input type="password" id='password' className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" name='password' value={login.password} onChange={handleChange} />
                  </div>
                </div>
          </div>

          <div className='bg-white login-btn'>
            <button className='signup-btn btn bg-dark text-white mt-5' onClick={handleClick} >Log In</button>
          </div>

          <div className='extra-auth'>
          <p>Don't have account yet ? <Link to={'/signup'} >Register Here</Link></p>
          <Link to={'/reset-password-email'} >Forgot Password ? </Link>
          </div>
          {/* <p>Forgot Password</p> */}
          
          </div>

          <div className='signup-image'>
            <img src={loginImage} alt="login page Image" className='signup-page-image' />
          </div>

      </div>

    </div>
  )
}

export default SignIn
