import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm'
      style={{
        background: 'rgba(255, 255, 255, 0.2)', // semi-transparent white background
        backdropFilter: 'blur(5px)', // blur effect
        WebkitBackdropFilter: 'blur(10px)', // for older browsers
        width: '760px',
        height: '60px', // Set the desired width here
        borderRadius: '20px',
        marginTop: '20px', // Add margin-top to move it down
      }}>
      <Image src='/logo.png'
        alt='logo'
        width={100}
        height={100}
        style={{ borderRadius: '40px' }} />
      <div className='hidden md:flex gap-5'>
      <h2 className='hover:bg-purple-500 px-3 cursor-pointer p-2 rounded-full hover:text-white text-white' style={{ opacity: 0.8 }}>SLOC - Sri Lanka Oil Corporation
</h2>


      </div>
      <UserButton />
    </div>
  )
}

function App() {
  return (
    <div className="flex justify-center ">
      <NavBar />
    </div>
  );
}

export default App;
