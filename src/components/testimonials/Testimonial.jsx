import React from 'react';
import "./testimonial.css";
import Avt1 from '../../assets/avatar1.jpeg';
import Avt2 from '../../assets/avatar2.jpeg';
import Avt3 from '../../assets/avatar3.jpeg';
import Avt4 from '../../assets/avatar4.jpeg';



// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



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
];



const Testimonial = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
       modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
          {/* // install Swiper modules */}
     
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                     <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide >
          )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonial