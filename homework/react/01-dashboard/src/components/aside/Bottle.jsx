import ellipse from "/images/aside/ellipse.png";
import roundedLine from "/images/aside/rounded-line.png";
import shadow from "/images/aside/shadow.png";
import waterBottle from "/images/aside/water-bottle.png";

const Bottle = () => {
  return (
    <section className="rounded-lg bg-blue-bottle grid grid-cols-2 py-4 h-40 mt-28 relative">
      <div className="relative">
        <img
          src={roundedLine}
          alt="vector1 image"
          className="absolute left-0 -top-9 h-24 w-24"
        />
        <img
          src={roundedLine}
          alt="vector2 image"
          className="absolute left-0 -top-4 h-24 w-24"
        />
        <img
          src={shadow}
          alt="shadow image"
          className="absolute left-3 top-14 h-24 w-24"
        />
        <img
          src={waterBottle}
          alt="water bottle image"
          className="absolute left-8 -top-28 h-56"
        />
        <img
          src={ellipse}
          alt="ecllipse image"
          className="absolute left-1 bottom-4 h-6 w-6"
        />
      </div>
      <p className="px-2 text-white self-center">
        Stay Hydrated and beat heat.
      </p>
    </section>
  );
};

export default Bottle;
