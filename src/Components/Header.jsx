import './Header.css';
import Dashboard from '../Pages/PagebodyLayout';
import  React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import  {Avatar} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TaskIcon from '@mui/icons-material/Task';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { Students } from '../Pages/Students';





const Header = ({open, setOpen, open1, setOpen1, open2, setOpen2, refOpen,refOpen1, refOpen2}) => {

  return (
    <div className="headercontainer">
        <div className=" headerinner ">
            <div className="headermiddle">
                <div className="inputbox">
                <IconButton>
                <SearchIcon style={{color:"white", fontSize:"30", cursor:"pointer"}} />
                </IconButton>
                <input 
                  type="text"
                  className="inputtext"
                  placeholder="Find Something..." style={{color:"white", fontSize:"16px"}}/>
                </div>
            </div>
            <div className="headerright">
                <div className="usercontainer" ref={refOpen}>
                   <div className='user-container'  onClick={()=>{setOpen(!open)}}>
                       
                    <div className="userinner">
                     <div className="userhead">
                     <h4>Tumasang</h4><span><ArrowDropDownIcon style={{color:"rgb(156, 144, 144)"}} /></span>
                     </div>
                     <div className="useradmin">Admin</div>
                    </div>
                    <div className="useravatar">
                         <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    </div>

                   </div>

                    <div className={`dropdownmenu  ${open? "inactive" : "active"}`}>
                        <h4>Tumasang</h4>
                        <ul>
                            <DropdownItem 
                              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                              alt="profile"
                              title="My Profile" />
                            <DropdownItem Icon={TaskIcon} title="Task" />
                            <DropdownItem Icon={MessageIcon} title="Message" />
                            <DropdownItem Icon={SettingsIcon} title="Account Settings" />
                            <DropdownItem Icon={LogoutIcon} title="Log Out" />
                        </ul>
                    </div>
                </div>


                <div className="messageicon" ref={refOpen1}>
                    <div className='mailoutlineIcon' onClick={()=>{setOpen1(!open1)}}>
                        <IconButton 
                        style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}>    
                            <MailOutlineIcon style={{cursor:"pointer", color:"white", fontSize:"25px"}}/>
                            <span className='m-t'>5</span>
                        </IconButton>
                    </div>

                    <div className={`dropdown-message-box ${open1? "inactive" : "active"}`}>
                        <h5>05 Messages</h5>
                        <div className='dropdown-message-box-item'>
                            <DropdownMessage />
                            <DropdownMessage />
                            <DropdownMessage />
                            <DropdownMessage />
                            <DropdownMessage />
                            <DropdownMessage />
                            <DropdownMessage />
                        </div>
                    </div>
                </div>



                <div className="notification" ref={refOpen2}>
                    <div className='nt-1' onClick={()=>{setOpen2(!open2)}}>
                        <IconButton
                         style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}>  
                             <NotificationsNoneIcon style={{cursor:"pointer", color:"white", fontSize:"25px"}}/>
                             <span className='m-t1'>8</span>
                        </IconButton>
                    </div>
                    
                    <div className={`nt-1-box  ${open2? "inactive" : "active"} `}>
                        <h5>08 notifications</h5>
                        <div className='nt-1-box-inner'>
                            <DropdownNotification  Icon={CheckCircleOutlineIcon}  title="Complete Today Task" />
                            <DropdownNotification  Icon={CalendarMonthIcon}  title="Directors Meeting" />
                            <DropdownNotification  Icon={EngineeringIcon}  title="Update meeting" />
                        </div>
                    </div>
                </div>



                <div className="language">
                    <div className="languageitems">
                        <LanguageIcon />
                        <h4>EN</h4>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
            </div>

            <div className='mt2_hidden'>
                <div className="mt2_hidden_inner">
                    <img src='data:image/jpeg;base64,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'
                     alt='logo' style={{height:"5rem", width:"200px"}}></img>
                    <div className="mt2_hidden_icon">
                         <IconButton style={{color:"white"}}>
                             <ArrowCircleDownOutlinedIcon style={{marginLeft:"20px"}}/> 
                         </IconButton>

                         <IconButton style={{color:"white"}}>
                             <MenuIcon />
                         </IconButton>
                    </div>
                </div>                 
                     
            </div>

        </div>
           
           <Dashboard />
           
    </div>
  )
}








//Reference to the dropdown items profile
function DropdownItem({src ,Icon, title}){
    return(
        <li className="dropdownItem">
            {src && <Avatar  style={{height:"25px", width:"25px"}}/>}
            {Icon && <Icon />}
            <h5>{title}</h5>
        </li>
    )
}


//dropdown messages box for dropdown messages
function DropdownMessage(){
    return(
        <div className="dropdown-messages">
            <div className='message_box'>

                <Avatar 
                style={{height:"30px", width:"30px"}}
                src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                />

               <div className='user_message'>
                   <div className='user-info'>
                        <h4>Tumasang</h4><time>18:30</time>
                    </div>
                    <p className='chat_message'>What is the reason of buying this item...</p>
                </div> 
            </div>
        </div>
    )
}


function DropdownNotification({Icon, title}){
    return(
        <div className='notification-info'>
             {Icon && <Icon />}
            <div>
                <h4>{title}</h4>
                <time>1 second ago</time>
            </div>
        </div>
    )
}

export default Header