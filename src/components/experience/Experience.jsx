import React from 'react';
import "./experience.css";
import { BsPatchCheckFill } from 'react-icons/bs';



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__contanier'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                 <h4>HTML5</h4>
                 <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Styled-component</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}
        
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
               </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Postgres</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience