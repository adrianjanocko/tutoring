import Fruit from "./Fruit";

const fruitData = [
  {
    name: "watermelon",
    description: "It contains 97% water in it. A good choice to stay hydrated.",
    background: "green-fruit",
    image: "/images/content/hydratation/watermelon.png",
  },
  {
    name: "oranges",
    description:
      "It contains 72% water in it. It’s tangy nature helps with skin care.",
    background: "brown-light",
    image: "/images/content/hydratation/oranges.png",
  },
  {
    name: "grapes",
    description: "It contains vitamin ‘C’ which helps with retaining water.",
    background: "purple-fruit",
    image: "/images/content/hydratation/grapes.png",
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
          background={fruit.background}
          image={fruit.image}
        />
      ))}
    </div>
  );
}
