import React from 'react'

const Log = ({ammount, time}) => {
  return (
    <li className='w-full rounded-lg my-1 bg-white text-xs'>
        <div className='flex justify-between w-full py-1 px-2 rounded-lg'>
            <div className='flex'>
                <h1 className='text-basePurple'>{ammount} ml</h1> 
            </div>
            <div className='ml-4'>
                <h2 className='text-xs'>{time}</h2>
            </div>
        </div>
    </li>
  )
}

export default Log