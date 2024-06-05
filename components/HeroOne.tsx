import React from 'react';

function HeroOne() {
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-2' style={{ padding: '20px',  }}>
      <div className="image-container">
        <img src="/hero1.png" alt="Hero Image" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
      </div>
      <div className="text-container" style={{ textAlign: 'left', padding: '20px' }}>
      <h1 style={{
  fontSize: '5rem',
  marginBottom: '10px',
  backgroundImage: 'linear-gradient(to right, #ffffff, #aaaaaa)', // White to Grey gradient
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}} >
  Premium Fuels
</h1>


        <p style={{ fontSize: '2rem', marginBottom: '20px' ,
        backgroundImage: 'linear-gradient(to right, #ffffff, #aaaaaa)', // White to Grey gradient
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    }}>Fuels For a faster, cleaner, more cost-effective ride </p>
            <p style={{ fontSize: '1rem', marginBottom: '20px' ,
        backgroundImage: 'linear-gradient(to right, #ffffff, #aaaaaa)', // White to Grey gradient
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    }}>SLOC is Sri Lanka's #1 listed energy company, bringing energy to life for the whole nation. </p>
        <button
  style={{
    padding: '10px 20px',
    fontSize: '1rem',
    background: '#fff',
    color: '#000000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'block',
  }}
  onClick={() => {
    window.location.href = 'tel:0766064842';
  }}
>
  Call Us - 0766064842
</button>




      </div>
      <div className="rating flex justify-center center items-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
      
    </div>
  );
}

export default HeroOne;
