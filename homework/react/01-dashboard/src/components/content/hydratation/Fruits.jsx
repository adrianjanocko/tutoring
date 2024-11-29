import Fruit from "./Fruit";

const fruitData = [
  {
    name: "watermelon",
    description: "It contains 97% water in it. A good choice to stay hydrated.",
    image: "/images/content/hydratation/watermelon.png",
    className: "bg-green-fruit",
  },
  {
    name: "oranges",
    description:
      "It contains 72% water in it. It’s tangy nature helps with skin care.",
    image: "/images/content/hydratation/oranges.png",
    className: "bg-brown-light",
  },
  {
    name: "grapes",
    description: "It contains vitamin ‘C’ which helps with retaining water.",
    image: "/images/content/hydratation/grapes.png",
    className: "bg-purple-fruit",
  },
];

export default function Fruits() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {fruitData.map((fruit, index) => (
        <Fruit
          key={index}
          name={fruit.name}
          description={fruit.description}
          image={fruit.image}
          className={fruit.className}
        />
      ))}
    </div>
  );
}
