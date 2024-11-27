import React from 'react'
import Log from './drink/Log'

const Drink = () => {
  return (
    <div className='flex flex-col py-4 bg-drinkGrey w-full px-4 rounded-lg'>
        <div className='flex justify-between'>
            <h1 className='text-basePurple text-md'>Drink Log</h1>
            <span className='text-basePurple'>...</span>
        </div>
        <ul className='flex flex-col items-center mt-2'>
           <Log ammount={250} time="08:00 am"/>
           <Log ammount={200} time="09:30 am"/>
           <Log ammount={500} time="11:00 am"/>
           <Log ammount={200} time="01:00 pm"/>
           <Log ammount={250} time="03:00 [m"/>
        </ul>
    </div>
  )
}

export default Drink