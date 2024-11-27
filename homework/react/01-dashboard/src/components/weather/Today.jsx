import React from 'react'

const Today = ({weather}) => {
  return (
    <>
        <h1>It's a <span className='font-bold capitalize'>{weather} Day</span> today!</h1>
    </>
  )
}

export default Today