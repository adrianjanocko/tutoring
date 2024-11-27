const SimpleGlass = ({colour,number}) => {
  return (
    <div className='flex items-center gap-1'>
        <div className={`rounded-full w-2 h-2 bg-chart${colour}`}></div>
        <h5>Glass {number}</h5>
    </div>
  )
}

export default SimpleGlass