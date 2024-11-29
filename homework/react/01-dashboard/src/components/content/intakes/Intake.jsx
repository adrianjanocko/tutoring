import { twMerge } from "tailwind-merge";

export default function Intake({ title, percentage, milliliters, className }) {
  return (
    <div
      className={twMerge(
        "py-5 px-2 rounded-xl flex items-start justify-start pl-6 gap-4",
        className
      )}
    >
      <div className="flex justify-center items-center w-fit h-full">
        {percentage} %
      </div>
      <div>
        <h2>{title}</h2>
        <span className="font-bold">{milliliters} ml</span>
      </div>
    </div>
  );
}
