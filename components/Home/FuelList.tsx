import React from 'react'
import FuelCard from './FuelCard'

function FuelList(props:any) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {props.fuelLists.map((fuel:any,index:number)=>(
            <div>
                <FuelCard fuel={fuel} />
                
                </div>
        ))}
    </div>
  )
}

export default FuelList
