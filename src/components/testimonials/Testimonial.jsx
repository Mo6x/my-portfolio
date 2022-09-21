import React from 'react';
import "./testimonial.css";
import Avt1 from '../../assets/avatar1.jpeg';
import Avt2 from '../../assets/avatar2.jpeg';
import Avt3 from '../../assets/avatar3.jpeg';
import Avt4 from '../../assets/avatar4.jpeg';


const data = [
  {
    avatar: Avt1,
    name: 'Christopher Moses',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditis consequatur qui molestiae.Dolorem, perspicatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
     },
  {
    avatar: Avt2,
    name: 'Christopher Moses',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspicatis aspernatur labore distinctio ratione delectus voluptatem dolores  deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: Avt3,
    name: 'Christopher Moses',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspicatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?' 
  },
  {
    avatar: Avt4,
    name: 'Christopher Moses',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditis consequatur qui molestiae. Dolorem, perspicatis aspernatur labore distinctio ratione delectus voluptatem dolores  deserunt explicabo nostrum ducimus quasi?'
  },
]



const Testimonial = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className='client__avatar'>
                     <img src={avatar} />'
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{ review }</small>
            </article>
          )
          })
             }
        </div>
    </section>
  )
}

export default Testimonial