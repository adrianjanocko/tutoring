import Greet from "../components/content/Greet";
import Hydratation from "../components/content/Hydratation";
import Intakes from "../components/content/Intakes";
import Weather from "../components/content/Weather";

export default function Hero() {
  return (
    <main className="pt-10 px-10 flex flex-col gap-4">
      <Greet name="Mathew" />
      <Weather today="sunny" />
      <Intakes />
      <Hydratation />
    </main>
  );
}
