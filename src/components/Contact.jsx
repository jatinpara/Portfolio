import React from 'react';
import { CONTACT } from '../constants';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className='flex justify-center items-center gap-4 text-2xl tracking-tighter'>
        <a href="#" className='border-b'>{CONTACT.email}</a>
        Or
        <a 
          href="https://www.linkedin.com/in/jatin-parashar-44b099269" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 text-3xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
