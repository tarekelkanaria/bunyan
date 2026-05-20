import { NavLink } from "react-router";
import { FaUsers } from "react-icons/fa";
import { SiStatuspal } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { IoGlobe } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

type DraftKey = "users" | "projects" | "developers";

export type DraftingState = Record<DraftKey, boolean>;
export default function Sidebar({ isDrafting }: { isDrafting: DraftingState }) {
  const links = [
    {
      Icon: <SiStatuspal className="mr-2 text-white text-xl" />,
      title: "Status",
      path: "/",
    },
    {
      Icon: <FaUsers className="mr-2 text-white text-xl" />,
      title: "User management",
      path: "/users",
    },
    {
      Icon: <GoProjectRoadmap className="mr-2 text-white text-xl" />,
      title: "Projects management",
      path: "/projects",
    },
    {
      Icon: <GoProjectRoadmap className="mr-2 text-white text-xl" />,
      title: "Developers management",
      path: "/developers",
    },
    {
      Icon: <IoGlobe className="mr-2 text-white text-xl" />,
      title: "CMS",
      path: "/cms",
    },
    {
      Icon: <FaMessage className="mr-2 text-white text-xl" />,
      title: "Live Chat",
      path: "/live-chat",
    },
  ];
  return (
    <aside className="hidden lg:block min-h-screen bg-midblue text-white py-4 lg:w-80">
      <h3 className="mb-5 px-4 uppercase font-montserrat font-bold text-sm text-azur tracking-tight">
        Dashboards
      </h3>
      <nav className="px-1">
        {links.map((link, index) => (
          <NavLink to={link.path} key={`${link.title}-${index}`}>
            <p className="flex mb-2 py-4 px-1 items-center font-montserrat font-bold text-sm text-white uppercase tracking-tight hover:bg-white/5 transition-colors duration-300">
              {link.Icon}
              {link.title}

              {isDrafting[link.path.substring(1) as DraftKey] && (
                <span className="text-[10px] text-violet-600 p-0.5 bg-aqua rounded-md  ml-auto">
                  Drafting...
                </span>
              )}
            </p>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
