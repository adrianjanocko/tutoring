import { twMerge } from "tailwind-merge";

const Fruit = ({ name, description, image, className }) => {
  return (
    <div className={twMerge("flex flex-col rounded-lg p-5 gap-2", className)}>
      <img src={image} alt={name} className="size-8 object-contain" />
      <h3 className="text-grey-darker font-bold capitalize">{name}</h3>
      <p className="font-light text-sm text-grey max-w-44">{description}</p>
    </div>
  );
};

export default Fruit;
