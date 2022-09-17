import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import{RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
const form =useRef()
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_80wfo1t', 'template_vp1zn0u', form.current, '5hpy39NeufOEk-u3V')
    e.target.reset()
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>sohaibrana151@gmail.com</h5>
          <a href='mailto:sohaibrana151@gmail.com' target='_blank' rel='noreferrer noopener'>Send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Sohaib Rana</h5>
          <a href='mailto:sohaibrana151@gmail.com' target='_blank' rel='noreferrer noopener'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>whatsApp</h5>
          <a href='https://api.whatsapp.com/send?phone=+923061718151' target='_blank' rel='noreferrer noopener'>Send a message</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Your Name'></input>
          <input type='email' name='email' placeholder='Enter Your Email Address'></input>
          <textarea name="message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact