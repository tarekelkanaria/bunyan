import { FaUsers } from "react-icons/fa";
import { SiStatuspal } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { IoGlobe } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

export default function Sidebar() {
  const links = [
    {
      Icon: <SiStatuspal className="mr-1 text-white text-xl" />,
      title: "Status",
    },
    {
      Icon: <FaUsers className="mr-1 text-white text-xl" />,
      title: "User management",
    },
    {
      Icon: <GoProjectRoadmap className="mr-1 text-white text-xl" />,
      title: "Projects management",
    },
    {
      Icon: <GoProjectRoadmap className="mr-1 text-white text-xl" />,
      title: "Developers management",
    },
    {
      Icon: <IoGlobe className="mr-1 text-white text-xl" />,
      title: "CMS",
    },
    {
      Icon: <FaMessage className="mr-1 text-white text-xl" />,
      title: "Live Chat",
    },
  ];
  return (
    <aside className="hidden lg:block min-h-screen bg-midblue text-white py-4 lg:w-60">
      <h3 className="mb-5 uppercase text-center font-montserrat font-bold text-sm text-azur tracking-tight">
        Dashboards
      </h3>
      <nav className="px-1">
        {links.map((link, index) => (
          <a href="#" key={`${link.title}-${index}`}>
            <p className="flex items-center mb-8 font-montserrat font-bold text-sm text-white uppercase tracking-tight">
              {link.Icon}
              {link.title}
            </p>
          </a>
        ))}
      </nav>
    </aside>
  );
}
