import React from 'react';
import "./nav.css";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-dom/ai';
import { BiBook } from 'react-dom/bi';
import { RiServiceLine } from 'react-icons/ri';
import {TbMessage2} from 'react-dom/tb';



const Nav = () => { 
  return (
      <nav>
          <a href='#'><AiOutlineHome /></a>
          <a href='#about'><AiOutlineUser  /></a>
          <a href='#experience'><BiBook /></a>
          <a href='#services'><RiServiceLine /></a>
          <a href='#contact'><TbMessage2/></a>
      </nav>
  )
}

export default Nav