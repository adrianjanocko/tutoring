import Today from '../weather/Today'
import WeatherIcon from '../weather/WeatherIcon'
import Advice from '../weather/Advice'

const Weather = () => {
  return (
    <div className='bg-slate-100 rounded w-full py-5 px-5 flex items-center justify-between text-sm'>
        <WeatherIcon weatherAltTag="sunny" temperature={26}/>
        <Today weather="sunny"/>
        <Advice advice="Don’t forget to take your water bottle with you."/>
    </div>
  )
}

export default Weather