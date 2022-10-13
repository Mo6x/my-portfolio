import React from 'react';
import "./footer.css";
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Christ-Moses</a>
      
      <ul className='Permalink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://twitter.com'>< FaLinkedin/></a>
         <a href='https://linkedIn.com'><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
          <small>&Christopher-moses</small>
      </div>
    </footer>
  )
}

export default Footer