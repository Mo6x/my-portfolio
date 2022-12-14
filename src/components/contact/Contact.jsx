import React from 'react';
import "./contact.css";
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xjz4kOe', 'template_s2iu5bl', form.current, 'user_Zwde0LxpfFeaeHXfd')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMailOpen className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>christmoses1999@gmail.com</h5>
            <a href='mailto:christmoses1999@gmail.com' target="_blank">Send a message</a>           
          </article>
          <article className='contact__option'>
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Christopher moses</h5>
            <a href='https://www.linkedin.com/in/christopher-moses-793488232/' target="_blank">Send a message</a>           
        </article>
        <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348058960314</h5>
            <a href='https://api.whatsapp.com/send?phone+2348058960314' target="_blank">Send a message</a>           
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact