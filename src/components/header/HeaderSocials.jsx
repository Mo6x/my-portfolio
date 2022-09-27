import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { GrGithub } from 'react-icons/gr';
 import { AiFillInstagram } from 'react-icons/ai';


const HeaderSocials = () => {
  return (
      <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank' rel="noreferrer">< BsLinkedin /></a>
          <a href='https://github.com' target='_blank'rel="noreferrer">< GrGithub /></a>
          <a href='https://dribble.com' target='_blank'rel="noreferrer">< AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials