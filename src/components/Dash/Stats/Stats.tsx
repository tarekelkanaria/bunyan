import StatsItem from "components/UI/StatsItem/StatsItem";
import { FaBuilding } from "react-icons/fa6";
import { FaUserAlt, FaBloggerB } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

export default function Stats() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mb-14 px-2">
      <StatsItem text="Projects" num={120} Icon={FaBuilding} />
      <StatsItem text="Users" num={150} Icon={FaUserAlt} />
      <StatsItem text="Developers" num={75} Icon={GrUserWorker} />
      <StatsItem text="Blogs" num={30} Icon={FaBloggerB} />
    </div>
  );
}
