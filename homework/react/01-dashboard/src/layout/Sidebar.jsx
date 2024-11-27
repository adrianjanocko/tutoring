import Links from "../components/sidebar/Links";
import User from "../components/sidebar/User";
import logo from "/images/sidebar/logo.png";

export default function Navigation() {
  return (
    <nav className="flex flex-col items-center relative h-screen py-10 min-h-full border-r-2 justify-between">
      <div>
        <img src={logo} alt="logo" />
        <Links />
      </div>
      <User username="Mathew" email="mathewperry@xyz.com" />
    </nav>
  );
}
