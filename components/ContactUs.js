import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eah2ntm', 'template_5wi18be', form.current, 'kBjW0x9vXzjBykXWv')
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
      <label htmlFor="fuelType" style={{color: 'white'}}>Select Fuel Type</label>
      <select id="fuelType" name="fuelType" style={{ width: '100%', padding: '8px', marginBottom: '10px', color:'white' }}>
        <option value="petrol">Petrol 1L</option>
        <option value="diesel">Diesel 1L</option>
        <option value="natural_gas">Natural Gas 1 Can</option>
        <option value="propane">Propane 1L</option>
        <option value="ethanol">Ethanol 1L</option>
        <option value="biodiesel">Biodiesel 1L</option>
        <option value="hydrogen">Hydrogen 1 Can</option>
        <option value="methanol">Methanol 1L</option>
        <option value="compressed_natural_gas">Compressed Natural Gas</option>
        <option value="liquefied_natural_gas">Liquefied Natural Gas</option>
      </select>
      
      <label htmlFor="userName" style={{color: 'white'}}>Name</label>
      <input type="text" name="userName" placeholder='e.g Nadeesha' style={{ width: '100%', padding: '8px', marginBottom: '10px' , color:'white'}} />

      <label htmlFor="contactNumber" style={{color: 'white'}}>Contact Number</label>
      <input type="text" name="contactNumber" placeholder='e.g 0766064842' style={{ width: '100%', padding: '8px', marginBottom: '10px' , color:'white'}} />

      <label htmlFor="bookingDate" style={{color: 'white'}}>Booking Date</label>
      <input type="date" name="bookingDate" style={{ width: '100%', padding: '8px', marginBottom: '10px' , color:'white'}} />

      <label htmlFor="bookingTime" style={{color: 'white'}}>Booking Time</label>
      <input type="time" name="bookingTime" style={{ width: '100%', padding: '8px', marginBottom: '10px', color:'white' }} />

      <input type="submit" value="Send" style={{ width: '100%', padding: '10px', backgroundColor: '#000000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
    </form>
  );
};
