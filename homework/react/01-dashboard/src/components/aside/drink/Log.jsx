import React from "react";

const Log = ({ ammount, time }) => {
  return (
    <li className="w-full rounded-lg my-1 bg-white text-xs flex justify-between py-2 px-3">
      <span className="text-purple">{ammount} ml</span>
      <span className="text-xs">{time}</span>
    </li>
  );
};

export default Log;
