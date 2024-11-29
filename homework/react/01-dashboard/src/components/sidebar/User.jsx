import React from "react";

import guy from "/images/sidebar/guy.png";

export default function User({ username, email }) {
  return (
    <div className="flex gap-2">
      <img src={guy} alt="a happy guy picture" className="size-10" />
      <div className="text-grey-darker flex flex-col text-sm">
        <span>{username}</span>
        <span className="text-xs">{email}</span>
      </div>
    </div>
  );
}
