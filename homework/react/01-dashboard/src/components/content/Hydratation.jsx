import React from "react";
import Fruits from "./hydratation/Fruits";

const Hydratation = () => {
  return (
    <section className="rounded-lg border-2 py-6 px-8 grid gap-4">
      <div className="flex justify-between">
        <div className="grid gap-1">
          <h2 className="text-grey font-medium text-xl">Hydratation Tips</h2>
          <p className="text-light text-sm text-grey">
            Consuming fruit juices keeps up the hydration level.
          </p>
        </div>
        <select className="px-4 py-2 text-base text-grey rounded-md focus:outline-none">
          <option value="all">See All</option>
          <option value="glass1">Glass 1</option>
          <option value="glass2">Glass 2</option>
          <option value="glass3">Glass 3</option>
        </select>
      </div>

      <Fruits />
    </section>
  );
};

export default Hydratation;
