import Bottle from './rightColumn/Bottle'
import Calendar from './rightColumn/Calendar'
import Drink from './rightColumn/Drink'
import Goal from './rightColumn/Goal'

const RightColumn = () => {
  return (
    <section className='flex flex-col items-center relative min-h-screen pt-10 px-10 gap-4 border-l-2'>
        <Calendar/>
        <Bottle/>
        <Goal/>
        <Drink/>
    </section>
  )
}

export default RightColumn