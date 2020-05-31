import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/download.jpeg';
function Menubar() {
  const [navOpen,setNavOpen]=useState(false);
    return (
      <nav className = "responsive-menu">
      <ul>
         <figure onClick={()=>setNavOpen(!navOpen)}>
            <img src ={logo} height="50px" width="50px" alt="logo-nav-toggler"/>
         </figure>
        <li

        className={navOpen?'active':'hidden'}           
        >
          <Link to='/order'>Orders</Link>
        </li>
        <li
          className={navOpen?'active':'hidden'}                       
        >
          <Link to="/product">Products</Link>
        </li>
        <li
         className={navOpen?'active':'hidden'}                                     
        >
          <Link to="/contact">About</Link>
        </li>
        <li

        className={navOpen?'active':'hidden'}           
        >
          <Link to='/home'>Home</Link>
        </li>
        <li

        className={navOpen?'active':'hidden'}           
        >
          <Link to='/customer'>Register</Link>
        </li>

        <li
        className={navOpen?'active':'hidden'}
        >
        <Link to="/"></Link>
        </li>
      </ul>
    </nav>    
    );
};
    
export default Menubar;