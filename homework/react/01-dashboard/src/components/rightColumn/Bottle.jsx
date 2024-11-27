import waterBottle from '/images/waterBottle.png'
import shadow from '/images/shadow.png'
import vector1 from '/images/vector1.png'
import vector2 from '/images/vector2.png'
import ellipse from '/images/ellipse.png'

const Bottle = () => {
  return (
    <section className='rounded-lg bg-bottleBlue grid grid-cols-2 py-4 h-40 mt-28 relative'>
        <div className='relative'>
            <img src={vector1} alt="vector1 image" className='absolute left-0 -top-9 h-24 w-24'/>
            <img src={vector2} alt="vector2 image" className='absolute left-0 -top-4 h-24 w-24'/>
            <img src={shadow} alt="shadow image" className='absolute left-3 top-14 h-24 w-24'/>
            <img src={waterBottle} alt="water bottle image" className='absolute left-8 -top-28 h-56'/>
            <img src={ellipse} alt="ecllipse image" className='absolute left-1 bottom-4 h-6 w-6'/>

        </div>
        <div className='flex items-center'>
            <h1 className='px-2 text-white'>
                Stay 
                Hydrated
                and beat
                heat.
            </h1>
        </div>
        
    </section>
  )
}

export default Bottle