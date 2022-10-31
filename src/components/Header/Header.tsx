import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import './header.css'
import {api} from '../../Api/sourceApi'

const Header = () => {

  // const da : any = localStorage.getItem('signup') ? localStorage.getItem('signup') : 'username'

  // console.log(da)  
  // const username = JSON.parse(da).username ? JSON.parse(da).username : "username"

    // const name =  "Bhavisha Nayi"
    //  |localStorage.getItem('signup')
    const [username, setUsername] = useState('')

    const alphabetList = username?.split(" ") 

    const firstalphanets = alphabetList.map((item : any) => <p>{item[0]}</p>)
    
   
    
    useEffect(() => {
      axios.get( api + '/Register')
      .then(res => setUsername(res.data[res.data.length - 1].username))
      .catch(err => console.log(err))
    },[])


    // console.log(username)

    // console.log(alphabetList)

  return (
    <div className='main-header'>
        <div className='logo'><Link to={'/'}><img src={logo} alt='logo' className='logo-image' /></Link></div>
        <div className='header-username'>
             <div>
             {
                firstalphanets
             }
             </div>
             <h4>{username}</h4>
        </div>
    </div>
  )
}

export default Header