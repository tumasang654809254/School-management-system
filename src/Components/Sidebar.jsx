import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import './Sidebar.css'
import SubMenu from './SubMenu';
import SidebarData from './SidebarData';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);


  return (
    <>
      <div className={`sidebar_container ${!isExpanded ? 'side_bar_min': ''}`}>
      <div className="sidebar_header">
        <div className='sidebar_log'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJueOxDRQRtuKJ-dLEyJtOmgjgbg4iFsJkGw&usqp=CAU'
            alt='logo' style={{height:"50px", width:"80px"}}></img>
        </div>
        <IconButton style={{color:"white"}} onClick={() => setIsExpanded(!isExpanded)}>
             <MenuIcon/>
        </IconButton>
      </div>

        <div className='sidebar_menu'>
          {SidebarData.map((item, index)=>{
            return <SubMenu item={item}  key={index}/>;
          })}
        </div>

    </div>
    </>
  )
}

export default Sidebar