import React from 'react';
import "./services.css";
import { BiCheck } from 'react-icons/bi';


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
               
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
            </li>
          </ul>
           </article>
        {/* END OF UI/UX */}   
        
         <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
               
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with various frameworks like ReactJS, Typescript and Node.JS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Extensive experience and knowledge of data structures, database modelling, system architecture and concepts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with the design and implementation of RESTful web services and APIs. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with relational & non-relational databases such as PostgreSQL, SQLite and NoSQL databases such as MongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with Domain-Driven Design (DDD), and Test Driven Development (TDD),  using GIT Version Controls.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
         <article className='service'>
          <div className='service__head'>
            <h3>Agile Skills</h3>
          </div>
               
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration among other peoples.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A very strong communicator,  able to convey or exchange information, and ideas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Problem solving, finding solutions to difficult or complex issues.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptability, adjust to new conditions. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Critical thinking, contribute more effectively.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    
    </section> 
  )
}

export default Services