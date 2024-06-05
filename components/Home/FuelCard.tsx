import Image from 'next/image'
import React, { useState } from 'react'
import { CgEnter } from 'react-icons/cg'
import { FaGasPump } from 'react-icons/fa'
import { HiMiniArrowsUpDown } from 'react-icons/hi2'

function FuelCard(props:any) {
    const [fuel,setFuel]=useState(props.fuel)
  return (
<div className='p-2 hover:border-[1px] sm:hover:bg-gray-900
cursor-pointer border-gray-500 rounded-md bg-gray-900 w-[250px] mb-3 
object-contain'>
        <h2 className='text-gray-400 text-[20px] font-medium mb-2'>
            {fuel.name}
        </h2>
        <h2 className='text-gray-400 text-[28px] font-bold md-2'>
            <span className='text-gray-400 text-[12px] font-light'>$</span>
            {fuel.price}
            <span className='text-gray-400 text-[12px] font-light'>/Today</span>
        </h2>
        <Image src={fuel.image?.url}
        alt={fuel.name}
        width={220}
        height={200}
        className='w-[250px] h-[150px] mb-3 object-contain'/>
        <div className='text-center text-gray-400'>
            <FaGasPump className='w-full text-[22px] mb-2' />
            <h2 className='line-clamp-5 text-[14px] font-light'>
                {fuel.fuelAvg} in stock
            </h2>
        </div>
    </div>
  )
}

export default FuelCard
