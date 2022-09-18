import React from 'react';
import "./testimonial.css";
import avatar1 from '../../assets/avatar1.jpeg';
import avatar2 from '../../assets/avatar2.jpeg';
import avatar3 from '../../assets/avatar3.jpeg';
import avatar4 from '../../assets/avatar4.jpeg';
import avatar1 from '../../assets/avatar1.jpeg';



const Testimonial = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
             <img src={avatar1} alt='Avatar One'/>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi ex quasi molestias deleniti, aspernatur eaque, corporis laboriosam eveniet, libero ipsam mollitia in tenetur deserunt iste eum! Corporis, laudantium quia?
            </small>
          </div>
        </article>
         <article className='testimonial'>
          <div className='client__avatar'>
             <img src={avatar1} alt='Avatar One'/>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi ex quasi molestias deleniti, aspernatur eaque, corporis laboriosam eveniet, libero ipsam mollitia in tenetur deserunt iste eum! Corporis, laudantium quia?
            </small>
          </div>
        </article>
         <article className='testimonial'>
          <div className='client__avatar'>
             <img src={avatar1} alt='Avatar One'/>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi ex quasi molestias deleniti, aspernatur eaque, corporis laboriosam eveniet, libero ipsam mollitia in tenetur deserunt iste eum! Corporis, laudantium quia?
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial