import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/mess.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (<>
    
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Christopher Moses</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='testing'>
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>

    </div> </>
  )
}

export default Header