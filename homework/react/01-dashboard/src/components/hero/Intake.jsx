import Daily from "./intake/Daily"
import Average from "./intake/Average"
import Total from "./intake/Total"

const Intake = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
        <Daily percentage={80} mililiters={5000}/>
        <Average percentage={85} mililiters={2500}/>
        <Total percentage={68} mililiters={17000}/>
    </div>
  )
}

export default Intake