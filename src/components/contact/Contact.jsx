import React, { useRef } from 'react'
import './contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const EMAIL = 'sundar.singh.pharswan@outlook.com'
const PHONE = '+917696280994'

const Contact = () =>
{
  const form = useRef()
  const sendEmail = (e) =>
  {
    e.preventDefault();

    emailjs.sendForm('service_96ydzm7', 'template_khiwgcd', form.current, '7zEM_JbGz7zR-L_2C')
      .then((result) =>
      {
        e.target.reset();
      }, (error) =>
      {

      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container pg-section">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>{EMAIL}</h5>
            <a href={'mailto:' + EMAIL}>Send a mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href={` https://wa.me/` + PHONE} target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact