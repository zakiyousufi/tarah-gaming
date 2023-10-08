import React from 'react';
import './style.css';
import { FaWhatsapp, FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h1>Let's Connect!</h1>
      <p className='contact-details'>Thank you for your interest in our gaming app. We're excited to hear from you and answer any questions you may have. Feel free to reach out to us via the following channels:
        <br />
        Email: ahmadzakiyousufi3@gmail.com
        <br />
        <br />
        <br />
        Follow us on these platforms for the latest updates, announcements, and behind-the-scenes peeks into our gaming app. We'd love to stay connected with you!
      </p>
        <br />
        <br />
        <br />
        <br />
      <div className='social-icons'>
        <a className='social-link' href='https://www.github.com/zakiyousufi' target='_blank' rel='noreferrer'>
          <FaGithub className='icon' />
        </a>
        <a className='social-link' href='https://www.linkedin.com/in/zakiyousufi/' target='_blank' rel='noreferrer'>
          <FaLinkedin className='icon' />
        </a>
        <a className='social-link' href='https://www.facebook.com/profile.php?id=100081811465925' target='_blank' rel='noreferrer'>
          <FaFacebook className='icon' />
        </a>
        <a className='social-link' href='https://www.instagram.com/_tarah_graphics_/' target='_blank' rel='noreferrer'>
          <FaInstagram className='icon' />
        </a>
        <a className='social-link' href='https://wa.me/+93744890200' target='_blank' rel='noreferrer'>
          <FaWhatsapp className='icon' />
        </a>
      </div>
      <br />
      <div className='app-footer'>
        <p className='footer-p'>
          Made With
          {' '}
          <FaHeart className='text-red' />
          {' '}
          by Ahmad Zaki Yousufi</p>
      </div>
    </div>
  );
}

export default Contact;
