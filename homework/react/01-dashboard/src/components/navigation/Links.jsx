import { RxDashboard } from "react-icons/rx";
import { LuCalendarClock } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Links = () => {
  return (
    <div className="mt-28">
            <h1 className='text-basePurple mb-4'>Menu</h1>
            <ul className='text-baseGrey flex flex-col gap-4'>
                <li><a className='flex items-center gap-2 transition-colors hover:text-baseDarkerGrey delay-150' href="#"><RxDashboard className='text-xl' /> Dashboard</a></li>
                <li><a className='flex items-center gap-2 transition-colors hover:text-baseDarkerGrey delay-150' href="#"><LuCalendarClock className='text-xl' />Schedule Reminder</a></li>
                <li><a className='flex items-center gap-2 transition-colors hover:text-baseDarkerGrey delay-150' href="#"><FiPieChart className='text-xl' />Reports</a></li>
                <li><a className='flex items-center gap-2 transition-colors hover:text-baseDarkerGrey delay-150' href="#"><FaRegBell className='text-xl' />Notifications</a></li>
                <li><a className='flex items-center gap-2 transition-colors hover:text-baseDarkerGrey delay-150' href="#"><CiSettings className='text-xl' />Settings</a></li>
            </ul>
        </div>
  )
}

export default Links