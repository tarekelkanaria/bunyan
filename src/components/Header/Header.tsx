import Logo from "../../assets/logo.png";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <header className="container bg-white flex justify-between items-center max-h-24 overflow-hidden">
      <img src={Logo} alt="Bunyan Logo" />

      <div className="flex items-center">
        <div className="relative">
          <IoMdNotifications className="text-3xl text-midblue cursor-pointer" />
          <span className="absolute -top-1 left-3 w-5 h-5 rounded-full bg-aqua text-white text-center leading-[1.3]">
            0
          </span>
        </div>

        <button className="flex font-montserrat font-semibold items-center text-midblue ml-6 cursor-pointer ">
          Super Admin
          <IoIosArrowDown className="ml-2.5 text-midblue" />
        </button>
      </div>
    </header>
  );
}
