import React from 'react';
import "./about.css";
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { BsFolder2 } from 'react-icons/bs';



 const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-image'>
           <img src={ME} alt='About Image'/>
        </div>
      </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small className='small'>5 Years Working</small>
            </article>

            <article className='about__card'>
              <FaUserFriends className='about__icon'/>
              <h5>Clients</h5>
              <small className='small'>10+ GoMyCode</small>
            </article>

            <article className='about__card'>
              <BsFolder2 className='about__icon'/>
              <h5>Projects</h5>
              <small className='small'>6+ Completed</small>
            </article>
          </div>
          
          <p>
          I am an experienced Software Engineer with 5 years of working experience developing full-stack websites. Strong knowledge Of React.js for the Client side. with vast experience using Node.js for the server side.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
  
    </section>


  )
}

 export default About


