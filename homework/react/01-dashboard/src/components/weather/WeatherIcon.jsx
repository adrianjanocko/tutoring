import weatherIcon from '/images/weather.png'

const WeatherIcon = ({weatherAltTag, temperature}) => {
  return (
    <div className='flex items-center gap-4'>
        <img src={weatherIcon} alt={weatherAltTag} className='w-8 h-8'/>
        <h1 className='font-bold'>{temperature} °C</h1>
    </div>
  )
}

export default WeatherIcon