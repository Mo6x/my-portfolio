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
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUserFriends className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Decagon</small>
            </article>

            <article className='about__card'>
              <BsFolder2 className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          
          <p>
            An experienced FullStack and Performance Driven Engineer with 1+ years  of working experience developing industry-ready applications.
            Strong knowledge of TypeScript and JavaScript with vast experience in building Web Applications using ReactJS for the client side, Node.js / Express for the server side, MongoDB, and PostgreSQL for the database.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
  
    </section>


  )
}

 export default About


