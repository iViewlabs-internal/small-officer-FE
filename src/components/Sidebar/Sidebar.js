import React,{useState} from 'react';
import './sidebar.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';

const Nav = styled.div`
  background : rgb(234, 231, 231);
  height : 80px;
  display : flex;
  justify-content : center;
  align-items : center;
`

const NavIcon = styled(Link)`
  font-size : 2rem;
  height : 80px;
  display : flex;
  justify-content : flex-start;
  align-items : center;
  float : right;
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
`;


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <Nav>
        <NavIcon to='#' >
          <FaIcons.FaBars className='fabarsIcon' onClick={showSidebar}  />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar} >
        <SidebarWrap>
        <NavIcon to='#' >
          <AiIcons.AiOutlineClose onClick={showSidebar} />
        </NavIcon>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}
        </SidebarWrap>
      </SidebarNav>
    </>
  )
}

export default Sidebar