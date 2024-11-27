import Bottle from "../components/aside/Bottle";
import Calendar from "../components/aside/Calendar";
import DrinkLog from "../components/aside/DrinkLog";
import Goal from "../components/aside/Goal";

export default function Aside() {
  return (
    <aside className="flex flex-col items-center relative min-h-screen pt-10 px-10 gap-8 border-l-2">
      <Calendar />
      <Bottle />
      <Goal />
      <DrinkLog />
    </aside>
  );
}
