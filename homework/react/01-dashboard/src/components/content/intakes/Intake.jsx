export default function Intake({
  title,
  percentage,
  milliliters,
  bgColor,
  textColor,
}) {
  return (
    <div
      className={`${bgColor} py-5 px-2 rounded-xl flex items-start justify-start pl-6 gap-4`}
    >
      <div className="flex justify-center items-center w-fit h-full">
        {percentage} %
      </div>
      <div>
        <h1 className={textColor}>{title}</h1>
        <h1 className={`${textColor} font-bold`}>{milliliters} ml</h1>
      </div>
    </div>
  );
}
