import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { GrGithub } from 'react-icons/gr';
 import { IoLogoTwitter } from 'react-icons/io';


const HeaderSocials = () => {
  return (
      <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank' rel="noreferrer">< BsLinkedin /></a>
          <a href='https://github.com' target='_blank'rel="noreferrer">< GrGithub /></a>
          <a href='https://twitter.com' target='_blank'rel="noreferrer">< IoLogoTwitter /></a>
    </div>
  )
}

export default HeaderSocials