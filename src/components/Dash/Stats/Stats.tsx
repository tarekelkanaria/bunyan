import StatsItem from "components/UI/StatsItem/StatsItem";

export default function Stats() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mb-14 px-2">
      <StatsItem text="Project" num={120} />
      <StatsItem text="Project" num={120} />
      <StatsItem text="Project" num={120} />
      <StatsItem text="Project" num={120} />
    </div>
  );
}
