import HeroNav from "./hero/HeroNav"
import Weather from "./hero/Weather"
import Intake from "./hero/Intake"
import Glass from "./hero/Glass"
import Hydratation from "./hero/Hydratation"

const Hero = () => {
  return (
    <section className='pt-10 px-10 flex flex-col gap-4'>
        <HeroNav/>
        <Weather/>
        <Intake/>
        <Glass/>
        <Hydratation/>
    </section>
  )
}

export default Hero