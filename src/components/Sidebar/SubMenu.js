import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';

const SidebarLink = styled(Link)`
  display:flex;
  align-items : center;
  justify-content : center;
  padding : 23px;
  list-style : none;
  height : 20px;
  text-decoration : none;
  font-size : 18px;
  background : white;
  color:black;
  

  &:hover{
    border-left : 4px solid grey;
    curson : pointer;
  }
  `;

  const SidebarIcon= styled.div`
    width : 60px;
  `

  const SidebarLabel = styled.span`
  margin-left : 10px;
  background : white;
  `;

  const DropdownLink = styled(Link)`
    height : 40px;
    padding-left : 3rem;
    display : flex;
    align-items : center;
    text-decoration : none;
    color : grey;
    font-size : 18px;

    &:hover {
      curson : pointer;
    }

  ` 

const SubMenu = ({item}) => {

  const [subnav, setSubnav] = useState(false)
  const [overflow, setOverflow] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  // console.log(item.iconClosed, .itemiconOpend)

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <SidebarIcon>{item.icon}</SidebarIcon>
          <SidebarLabel>{item.title}</SidebarLabel>
          <div className='submenu-icons'>
          {item.subNav && subnav 
          ? <RiIcons.RiArrowDropUpFill />
          : item.subNav 
          ? <RiIcons.RiArrowDropDownFill />
          : null}
        </div>
      </SidebarLink>

      {/* submenu */}

      {subnav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index} onClick={() => setOverflow(true)}>
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}


export default SubMenu
