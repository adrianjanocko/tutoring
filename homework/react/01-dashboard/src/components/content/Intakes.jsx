import Intake from "./intakes/Intake";

const intakeItems = [
  {
    title: "Daily Intake",
    percentage: 80,
    milliliters: 5000,
    className: "bg-green-light text-green",
  },
  {
    title: "Average Intake",
    percentage: 85,
    milliliters: 2500,
    className: "bg-purple-light text-purple-text",
  },
  {
    title: "Total Intake",
    percentage: 68,
    milliliters: 17000,
    className: "bg-brown-light text-brown",
  },
];

export default function Intakes() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {intakeItems.map((item, index) => {
        return (
          <Intake
            key={index}
            title={item.title}
            percentage={item.percentage}
            milliliters={item.milliliters}
            className={item.className}
          />
        );
      })}
    </div>
  );
}
