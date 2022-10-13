import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import './header.css'

const Header = () => {

    const name =  "Bhavisha Nayi"
    //  |localStorage.getItem('signup')

    const alphabetList = name.split(" ")

    const firstalphanets = alphabetList.map((item : any) => <p>{item[0]}</p>)

    console.log(alphabetList)

  return (
    <div className='main-header'>
        <div className='logo'><Link to={'/'}><img src={logo} alt='logo' className='logo-image' /></Link></div>
        <div className='header-username'>
             <div>
             {
                firstalphanets
             }
             </div>
             <h4>Bhavisha Nayi</h4>
        </div>
    </div>
  )
}

export default Header