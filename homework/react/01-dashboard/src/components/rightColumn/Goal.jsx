import drop from '/images/drop.png';

const Goal = () => {
  return (
    <div className='gap-4 mt-8 bg-goalBlue rounded-lg w-full py-8 flex flex-col pl-6 text-white relative'>
        <h5>Intake Goal</h5>
        <h1 className='font-bold'>18000 ml / 25000 ml</h1>
        <img src={drop} alt="water drop" className='absolute top-7 right-10'/>
    </div>
  )
}

export default Goal