import React from 'react';
import QRCodeGenerator from '../QRCodeGenerator';

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2' style={{ padding: '20px' }}>
      <div className="text-container" style={{ textAlign: 'left', padding: '20px' }}>
      <h1 style={{
  fontSize: '5rem',
  marginBottom: '10px',
  backgroundImage: 'linear-gradient(to right, #ffffff, #aaaaaa)', // White to Grey gradient
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}} >
  SLOC
</h1>


        <p style={{ fontSize: '2rem', marginBottom: '20px' ,
        backgroundImage: 'linear-gradient(to right, #ffffff, #aaaaaa)', // White to Grey gradient
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    }}>Sri Lanka Oil Corporation</p>
            <p style={{ fontSize: '1rem', marginBottom: '20px' ,
        backgroundImage: 'linear-gradient(to right, #ffffff, #aaaaaa)', // White to Grey gradient
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    }}>SLOC is Sri Lanka's #1 listed energy company, bringing energy to life for the whole nation. </p>
        <button style={{
  padding: '10px 20px',
  fontSize: '1rem',
  background: '#fff',
  color: '#000000',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  display: 'block',
}}
>
Welcome to SLOC
</button>



      </div>
      <div className="image-container">
        <img src="/hero.png" alt="Hero Image" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
      </div>
    </div>
  );
}

export default Hero;
