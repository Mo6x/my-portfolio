import React from 'react';
import "./nav.css";
import { HiOutlineHome } from 'react-icons/hi';
import { FiUserCheck } from 'react-icons/fi';
import { RiBook2Line } from 'react-icons/ri';
import { RiServiceFill } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';
import { useState } from 'react';



const Nav = () => { 

 const [activeNav, setActiveNav] = useState('#');
  return (
      <nav>
          <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
          <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FiUserCheck  /></a>
          <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
          <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
          <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
      </nav>
      
      //  <nav>
      //     <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}></a>
      //     <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ></a>
      //     <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}></a>
      //     <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}></a>
      //     <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}></a>
      // </nav>
   )
}

export default Nav