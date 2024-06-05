import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Myform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eah2ntm', 'template_6032yge', form.current, 'kBjW0x9vXzjBykXWv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      
      <label htmlFor="userName" style={{color: 'white'}}>Name</label>
      <input type="text" name="userName" placeholder='e.g Nadeesha' style={{ width: '100%', padding: '8px', marginBottom: '10px' , color:'white'}} />

      <label htmlFor="contactNumber" style={{color: 'white'}}>Contact Number</label>
      <input type="text" name="contactNumber" placeholder='e.g 0766064842' style={{ width: '100%', padding: '8px', marginBottom: '10px' , color:'white'}} />

      <label htmlFor="message" style={{color: 'white'}}>Type a Message</label>
      <input type="message" name="message" style={{ width: '100%', padding: '8px', marginBottom: '10px' , color:'white'}} />
      <input type="submit" value="Send" style={{ width: '100%', padding: '10px', backgroundColor: '#000000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
    </form>
    
  );
  
};
