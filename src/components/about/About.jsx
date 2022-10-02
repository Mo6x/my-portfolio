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
              <small>2+ Years Working</small>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis officia, blanditiis aspernatur amet magnam natus molestiae vitae qui voluptatum ut libero facere, dolores temporibus saepe assumenda? Fugiat, recusandae officiis!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
  
    </section>


  )
}

 export default About


