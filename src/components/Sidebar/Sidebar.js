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
import useWindowDimensions from './useWindowDimensions';

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

  
  
  const wid = useWindowDimensions().width

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
        </SidebarWrap>
      </SidebarNav>

        </>
        :
        <>
        <SidebarNavHighWidth>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}
        </SidebarNavHighWidth>
        </>
      }
    </>
  )
}

export default Sidebar