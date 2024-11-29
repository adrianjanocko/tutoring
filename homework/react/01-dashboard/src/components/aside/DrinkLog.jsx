import React from "react";
import Log from "./drink/Log";

const logItems = [
  { amount: 250, time: "08:00 am" },
  { amount: 200, time: "09:30 am" },
  { amount: 500, time: "11:00 am" },
  { amount: 200, time: "01:00 pm" },
  { amount: 250, time: "03:00 am" },
];

export default function DrinkLog() {
  return (
    <div className="flex flex-col py-4 bg-grey-drink w-full px-4 rounded-lg">
      <div className="flex justify-between text-purple">
        <h2 className="text-md">Drink Log</h2>
        <span>...</span>
      </div>
      <ul className="flex flex-col items-center mt-2">
        {logItems.map((log, index) => (
          <Log key={index} ammount={log.amount} time={log.time} />
        ))}
      </ul>
    </div>
  );
}
