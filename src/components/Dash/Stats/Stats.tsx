import StatsItem from "components/UI/StatsItem/StatsItem";

export default function Stats() {
  return (
    <div className="container flex flex-col md:flex-row md:justify-between mb-14">
      <StatsItem text="Project" num={120} />
      <StatsItem text="Project" num={120} />
      <StatsItem text="Project" num={120} />
      <StatsItem text="Project" num={120} />
    </div>
  );
}
