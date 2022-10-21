import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/portfolio3.webp';
import IMG4 from '../../assets/portfolio4.webp';
import IMG5 from '../../assets/portfolio5.webp';
import IMG6 from '../../assets/portfolio6.webp';



const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Admin-Dashboard',
    github: 'https://github.com/Mo6x',
    demo: 'admindanshboard.netlify.app ',
},
{
  id: 2,
    image: IMG2,
    title: 'Airtime2Cash',
    github: 'https://github.com/Mo6x',
    demo: 'https://airtimetocashpodg.netlify.app',
  },
  {
  id: 3,
    image: IMG3,
    title: 'Kordin8',
    github: 'https://github.com/Mo6x',
    demo: 'http://kordin8.herokuapp.com',
},
  {
  id: 4,
    image: IMG4,
    title: 'My-portfolio-website',
    github: 'https://github.com/Mo6x',
    demo: 'https://dribbble.com/shots/19314598-Orion-UI-kit-for-Figma',
},
  {
  id: 5,
    image: IMG5,
    title: 'Bankist',
    github: 'https://github.com/Mo6x',
    demo: ' https://bankistapps.netlify.app',
},
  {
  id: 6,
    image: IMG6,
    title: 'Pig-game',
    github: 'https://github.com/Mo6x',
    demo: ' gamenor.netlify.app',
},
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className='contanier portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={ id } className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                   <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>


            )

          })
          }
      </div>
    </section>
  )
} 

  export default Portfolio