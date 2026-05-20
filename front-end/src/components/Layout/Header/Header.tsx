import Logo from "assets/logo.png";
import { IoMdNotifications } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

export default function Header({ adminName = "Super Admin" }) {
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

        <button className="flex font-montserrat font-semibold items-center text-midblue ml-1 md:ml-6 cursor-pointer ">
          {adminName}
          {/* <IoIosArrowDown className="ml-1 md:ml-2.5 text-midblue" /> */}
          <span className="w-8 h-8 ml-1 md:ml-2.5 rounded-full flex justify-center items-center bg-aqua text-white">
            {adminName.charAt(0).toUpperCase()}
          </span>
        </button>
      </div>
    </header>
  );
}
