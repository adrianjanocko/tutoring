const Fruit = ({ name, description, background, image }) => {
  const bgColors = ["bg-green-fruit", "bg-brown-fruit", "bg-purple-fruit"];

  return (
    <div className={`bg-${background} flex flex-col rounded-lg p-5 gap-2`}>
      <img src={image} alt={name} className="size-8 object-contain" />
      <h1 className="text-grey-darker font-bold capitalize">{name}</h1>
      <p className="font-light text-sm text-grey max-w-44">{description}</p>
    </div>
  );
};

export default Fruit;
