import { Icon } from "@iconify/react";
import React from "react";

const navItems = [
  { icon: "lucide:layout-grid", label: "Dashboard", href: "#" },
  { icon: "lucide:calendar-clock", label: "Schedule Reminder", href: "#" },
  { icon: "lucide:chart-pie", label: "Reports", href: "#" },
  { icon: "lucide:bell", label: "Notifications", href: "#" },
  { icon: "lucide:settings", label: "Settings", href: "#" },
];

export default function Links() {
  return (
    <div className="mt-28 grid gap-6">
      <span className="text-purple">Menu</span>
      <ul className="text-grey flex flex-col gap-7">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              className="flex items-center gap-5 transition duration-300 hover:text-grey-darker"
              href={item.href}
            >
              <Icon icon={item.icon} className="text-xl" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
