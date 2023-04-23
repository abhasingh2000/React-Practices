import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Listing = () => {
  return (
    <div>
      <ul>
        
     <Link to ="home"> <li>Home</li></Link>  
       <Link to = "about" ><li>About</li></Link> 
 
       <Link to ="antd-form"><li>Antd Form</li></Link>
      </ul>
     
    </div>
  )
}

export default Listing
