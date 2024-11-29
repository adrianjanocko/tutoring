import weatherIcon from "/images/content/weather/weather.png";

export default function WeatherInfo({ temperature }) {
  return (
    <div className="flex items-center gap-4">
      <img src={weatherIcon} alt="sunny icon" className="w-8 h-8" />
      <span className="font-bold">{temperature} °C</span>
    </div>
  );
}
