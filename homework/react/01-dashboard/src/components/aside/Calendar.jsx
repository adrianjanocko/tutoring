import { Icon } from "@iconify/react";

function getDate() {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}

const Calendar = () => {
  return (
    <div className="flex gap-2 items-center text-purple">
      <Icon icon="lucide:calendar" /> {getDate()}
    </div>
  );
};

export default Calendar;
