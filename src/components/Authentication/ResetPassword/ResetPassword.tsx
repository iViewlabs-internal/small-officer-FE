import React, {useState} from 'react'
import '../authentication.css'
import {FaEnvelope, FaLock} from 'react-icons/fa';
import loginImage from '../../../Assets/Images/login-image.png'
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { resetPassword, signIn } from '../../../Redux/Actions/Authentication';
import axios from 'axios';
import { api } from '../../../Api/sourceApi';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ResetPassword = () => {

  const [resetpass, setResetPass] = useState({
    password : "",
    confirmpassword : ""
  })

  

  const dispatch = useAppDispatch()

  const store = useAppSelector(state => state)

  const navigate = useNavigate()

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget

    setResetPass(prevData => ({ 
      ...prevData,
      [name] : value
    }))

  }

  const params = useParams()



  const handleClick = async () => {
    

    await axios.post(api + '/reset-password/id/token' , resetpass)
    .then(res => {

      console.log(res.status)

      const validate = () => {
            navigate('/')   
          }

          if( res.status === 200){
            toast.success('User Loggedin successfully !',{
              position :toast.POSITION.TOP_RIGHT,
              className : 'toast-message'
            }) 
      
            dispatch(resetPassword(resetPassword))
              localStorage.setItem('login', JSON.stringify(resetPassword))
      
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


  console.log(resetpass)

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
                  <label htmlFor="new-password" className='signup-label' id='new-pass-word' >New Password</label>
                  <div className="input-group flex-nowrap" id='new-pass-word'>
                    <span className="input-group-text bg-dark input-icon" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                    <input type="password" id='new-password' className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" name='password' value={resetpass.password} onChange={handleChange} />
                  </div>
                </div>

                <div className='signup-inputs' >
                  <label htmlFor="conf-password" className='signup-label' id='conf-pass-word' >Confirm Password</label>
                  <div className="input-group flex-nowrap" id='conf-pass-word'>
                    <span className="input-group-text bg-dark input-icon" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                    <input type="password" id='conf-password' className="form-control" placeholder="Confirm Password" aria-label="Password" aria-describedby="addon-wrapping" name='confirmpassword' value={resetpass.confirmpassword} onChange={handleChange} />
                  </div>
                </div>

          </div>

          <div className='bg-white login-btn'>
            <button className='signup-btn btn bg-dark text-white mt-5' onClick={handleClick} >Reset Password</button>
          </div>
          
          </div>

          <div className='signup-image'>
            <img src={loginImage} alt="login page Image" className='signup-page-image' />
          </div>

      </div>

    </div>
  )
}

export default ResetPassword
