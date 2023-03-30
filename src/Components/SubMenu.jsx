import React from 'react';
import Styled from "styled-components"
import  {Link} from 'react-router-dom';

import { useState } from 'react';


const SidebarLink = Styled(Link)`
display:flex;
color:purple;
justify-content:space-between;
align-items:center;
padding:20px;
list-style:none;
text-decoration:none;
height:60px;
font-size:18px;
color:white;
border-top:1px solid black;

&:hover{
  background:rgb(10, 10, 57);
  border-left:2px solid gray;
  cursor:pointer;
}
`
const SidebarLable = Styled.span`
margin-left:20px;
`

const DropdownLink = Styled(Link)`
background:;
height:40px;
padding-left:50px;
display:flex;
align-items:center;
color:white;
list-style-type:none:
font-size:18px;
margin-top:2px;
border-top:1px solid black;

&:hover{
  background:rgb(16, 16, 78);
}
`



const SubMenu = ({item}) => {

  const [subNav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subNav)

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLable>{item.title}</SidebarLable>
        </div>
        <div>
          {item.subNav && subNav 
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
        </div>
      </SidebarLink>
        {subNav && item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLable>{item.title}</SidebarLable>
            </DropdownLink>
          )
        })}

    </>
  )
}

export default SubMenu