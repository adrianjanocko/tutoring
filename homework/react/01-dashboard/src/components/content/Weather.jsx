import WeatherInfo from "./weather/WeatherInfo";

const Weather = ({ today }) => {
  return (
    <div className="bg-slate-100 rounded w-full p-6 flex items-center justify-between text-sm">
      <WeatherInfo temperature={26} />
      <h1>
        It's a <span className="font-bold capitalize">{today} Day</span> today!
      </h1>
      <h1 className="text-grey">
        Don’t forget to take your water bottle with you.
      </h1>
    </div>
  );
};

export default Weather;
