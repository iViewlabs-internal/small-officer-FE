import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';

const SidebarLink = styled(Link)`
  display:flex;
  align-items : center;
  padding : 30px;
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

  const SidebarLabel = styled.span`
  margin-left : 10px;
  background : white;
  `;

  const DropdownLink = styled(Link)`
    height : 60px;
    padding-left : 3rem;
    display : flex;
    align-items : center;
    text-decoration : none;
    color : black;
    font-size : 18px;

    &:hover {
      curson : pointer;
    }

  ` 

const SubMenu = ({item}) => {

  console.log(item)

  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  console.log(item.iconClosed, item.iconOpend)

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div >{item.icon}</div>
          <SidebarLabel>{item.title}</SidebarLabel>
        <div className='submenu-icons'>
          {item.subNav && subnav 
          ? <RiIcons.RiArrowDropDownFill />
          : item.subNav 
          ? <RiIcons.RiArrowDropUpFill /> 
          : null}
        </div>
      </SidebarLink>


      {/* submenu */}

      {subnav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}


export default SubMenu
