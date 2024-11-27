import Intake from "./intake/Intake";

const intakeItems = [
  {
    title: "Daily Intake",
    percentage: 80,
    milliliters: 5000,
    bgColor: "bg-green-light",
    textColor: "text-green",
  },
  {
    title: "Average Intake",
    percentage: 85,
    milliliters: 2500,
    bgColor: "bg-purple-light",
    textColor: "text-purple-text",
  },
  {
    title: "Total Intake",
    percentage: 68,
    milliliters: 17000,
    bgColor: "bg-brown-light",
    textColor: "text-brown",
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
            bgColor={item.bgColor}
            textColor={item.textColor}
          />
        );
      })}
    </div>
  );
}
