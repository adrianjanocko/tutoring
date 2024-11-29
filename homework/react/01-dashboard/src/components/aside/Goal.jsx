import drop from "/images/aside/drop.png";

const Goal = () => {
  return (
    <div className="gap-4 bg-blue-goal rounded-lg w-full py-8 flex flex-col pl-6 text-white relative">
      <h2>Intake Goal</h2>
      <span className="font-bold">18000 ml / 25000 ml</span>
      <img src={drop} alt="water drop" className="absolute top-7 right-10" />
    </div>
  );
};

export default Goal;
