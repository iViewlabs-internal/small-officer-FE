import React, {useState} from 'react'
import '../authentication.css'
import {FaEnvelope, FaLock} from 'react-icons/fa';
import loginImage from '../../../Assets/Images/login-image.png'
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { signIn } from '../../../Redux/Actions/Authentication';
import axios from 'axios';
import { api } from '../../../Api/sourceApi';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

  const [login, setLogin] = useState({
    username : "",
    password : ""
  })

  const dispatch = useAppDispatch()

  const store = useAppSelector(state => state)

  const navigate = useNavigate()

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget

    setLogin(prevData => ({ 
      ...prevData,
      [name] : value
    }))

  }

  const handleClick = async () => {
    

    await axios.post(api + '/login' , login)
    .then(res => {

      const validate = () => {
            navigate('/')
          }

      toast.success('User Loggedin successfully !',{
        position :toast.POSITION.TOP_RIGHT,
        className : 'toast-message'
      }) 

      dispatch(signIn(login))
        localStorage.setItem('login', JSON.stringify(store.AuthReducer.login))

        setTimeout(
                validate
              ,2000)

    })
    .catch(err => toast.error('Enter Valid credentials',{
        position : toast.POSITION.TOP_RIGHT,
        className : 'toast-message'
      }))

      
    //   console.log(res)
      
    //   const validate = () => {
    //     navigate('/')
    //   }
    //     toast.success('User Loggedin successfully !', {
    //       position: toast.POSITION.TOP_RIGHT,
    //       className : 'toast-message'
    //     })

    //     dispatch(signIn(login))
    //     localStorage.setItem('login', JSON.stringify(store.AuthReducer.login))

    //     setTimeout(
    //       validate
    //     ,2000)

    // })
    // .catch(err => toast.error('Enter Valid credentials',{
    //   position : toast.POSITION.TOP_RIGHT,
    //   className : 'toast-message'
    // }))
  

    // const validate = () => {
    //       navigate('/')
    //     }

    //     const signupdata : any = localStorage.getItem('signup')
    //     const data = JSON.parse(signupdata)
    //     console.log(data)

    //     if(data.username === login.username && data.password === login.password){

    //       toast.success('User Loggedin successfully !', {
    //         position: toast.POSITION.TOP_RIGHT,
    //         className : 'toast-message'
    //       })
  
    //       dispatch(signIn(login))
    //       localStorage.setItem('login', JSON.stringify(store.AuthReducer.login))
  
    //       setTimeout(
    //         validate
    //       ,2000)

    //     }

    //     else{
    //       alert('Enter valid credentials')
    //     }


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
                  <label htmlFor="username" className='signup-label' id='user-name' >Username</label>
                  <div className="input-group mb-3" id='user-name'>
                    <span className="input-group-text bg-dark " id="basic-addon1"><FaEnvelope className='text-light bg-dark' /></span>
                    <input type="text" className="form-control" id='username' placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name='username' value={login.username} onChange={handleChange} />
                  </div>
                </div>

                <div className='signup-inputs' >
                  <label htmlFor="password" className='signup-label' id='pass-word' >Password</label>
                  <div className="input-group flex-nowrap" id='pass-word'>
                    <span className="input-group-text bg-dark" id="addon-wrapping"> <FaLock className='text-light bg-dark' /> </span>
                    <input type="password" id='password' className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" name='password' value={login.password} onChange={handleChange} />
                  </div>
                </div>
          </div>

          <div className='bg-white login-btn'>
            <button className='signup-btn btn bg-dark text-white mt-5' onClick={handleClick} >Log In</button>
          </div>
          
          </div>




          <div className='signup-image'>
            <img src={loginImage} alt="login page Image" className='signup-page-image' />
          </div>

      </div>

    </div>
  )
}

export default SignIn
