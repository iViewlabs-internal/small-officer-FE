import React,{useEffect, useState} from 'react';
import './sidebar.css';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';
import useWindowDimensions from './useWindowDimensions';
import axios from 'axios';
import { api } from '../../Api/sourceApi';
import { useAppSelector } from '../../Redux/hook';

const Nav = styled.div`
  background : white;
  height : 80px;
  display : grid;
  grid-template-columns: 80%;
  justify-content : center;
  align-items : center;
  text-align: center;
  padding : 20px;
`

const NavIcon = styled(Link)`
  font-size : 2rem;
  height : 80px;
  width : 40px;
  display : flex;
  justify-content : flex-start;
  align-items : center;
  float : right;
  background-color : white;
`;

const SidebarNav = styled.nav`
  background : #15171c;
  width : 250px;
  height : 100vh;
  display : flex;
  justify-content : center;
  position : fixed;
  top : 0;
  left : ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition : 350ms;
  z-index : 10;
`;

const SidebarWrap = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns: 80%;
  justify-content : center;
  align-items : center;

`;

const Icons = styled.div`
  display:grid;
  grid-template-columns: 30px;
  align-items : center;
  gap: 20px;
  height : 60px;
  text-decoration : none;
  color:black;
  margin-left : -10px;

  `;

  const SidebarNavHighWidth = styled.div`
  background : white;
  width : 200px;
  height : 100vh;
  position : fixed;
  top : 10;
  transition : 350ms;
  z-index : 10;
  `


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const navigate = useNavigate()

  
  
  const wid = useWindowDimensions().width

  const logout = () => {
    localStorage.removeItem('login')
    navigate('/login')
  }

  const store = useAppSelector(state => state)

  const user = store.AuthReducer.signupData

  const loginData = JSON.parse(localStorage.getItem('login'))

  console.log(loginData.email, 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')

  const userId = user.map(item => item.email == loginData.email ? console.log(item.id) : console.log('hhhhhhhhhhhhhhhhhhhhhhh') )

  console.log(user, 'jjjjjjjjjjjj')

  const signout = () => {
    localStorage.removeItem('signup')
    localStorage.removeItem('login')
    axios.delete(api + '/signout')
    navigate('/signup')
  }

  console.log(wid)


  return (
    <>
      {
        wid < 800 ? <>
        
      <Nav>
        <NavIcon to='#' >
          <FaIcons.FaBars className='fabarsIcon' onClick={showSidebar}  />
        </NavIcon>
        <Icons>
        {
          SidebarData.map((item,index) => {
            return <div >{item.icon}</div>
        
          })
        }
        </Icons>
        {/* </div> */}
      </Nav>
      <SidebarNav sidebar={sidebar} >
        <SidebarWrap>
        <NavIcon to='#' >
          <AiIcons.AiOutlineClose onClick={showSidebar} />
        </NavIcon>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}
        <button onClick={logout} className='auth-btn btn'>Logout</button>
        <button onClick={signout} className='auth-btn btn'>SignOut</button>
        </SidebarWrap>
      </SidebarNav>

        </>
        :
        <>
        <SidebarNavHighWidth>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}
        <button onClick={logout} className='auth-btn btn'>Logout</button>
        <button onClick={signout} className='auth-btn btn'>SignOut</button>
        </SidebarNavHighWidth>
        </>
      }
    </>
  )
}

export default Sidebar