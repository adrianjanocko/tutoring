import React from "react";

const Log = ({ ammount, time }) => {
  return (
    <li className="w-full rounded-lg my-1 bg-white text-xs flex justify-between py-2 px-3">
      <div className="flex">
        <h1 className="text-purple">{ammount} ml</h1>
      </div>
      <div className="ml-4">
        <h2 className="text-xs">{time}</h2>
      </div>
    </li>
  );
};

export default Log;
