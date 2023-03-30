import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PageBody from './PageBody';
import './PagebodyLayout.css'





const PagebodyLayout = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard_header">
            <h1>Admin Dashboard</h1>
            <div className="header_inner">
                <span><a href='/dashboard/admin'>Home</a></span>
                <KeyboardArrowRightIcon  style={{color:"purple", fontSize:"25px"}}/>
                <h3>Admin</h3>
            </div>
        </div>


        <div className="dashboard_body">
            <PageBody />
        </div>


        <div className="dashboard_footer">
            <div>
                ©<h4>Copyrights</h4><a href='#'>tumasang</a><h4>2023.
                 </h4><h4>All rights reserved.</h4><h3>Designd by 
                 <a href='#'>Tumasang</a></h3>
            </div>
        </div>
    </div>
  )
}

export default PagebodyLayout