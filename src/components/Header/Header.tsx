import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import './header.css'

const Header = () => {

  const da : any = localStorage.getItem('signup') ? localStorage.getItem('signup') : ' '

  console.log(da)  
  const username = JSON.parse(da).username


    // const name =  "Bhavisha Nayi"
    //  |localStorage.getItem('signup')

    const alphabetList = username.split(" ")

    const firstalphanets = alphabetList.map((item : any) => <p>{item[0]}</p>)
    
    

    // console.log(username)

    // console.log(alphabetList)

  return (
    <div className='main-header'>
        <div className='logo'><Link to={'/home'}><img src={logo} alt='logo' className='logo-image' /></Link></div>
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