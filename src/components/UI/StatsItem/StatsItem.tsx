import ProjItem from "assets/proj-item.svg";

export default function StatsItem({
  text,
  num,
}: {
  text: string;
  num: number;
}) {
  return (
    <article className="md:w-[22.5%] bg-midsky p-5 lg:p-10 shadow-item rounded-xl max-md:mb-5">
      <div className="flex justify-between">
        <img src={ProjItem} alt="project icon" />
        <div className="max-w-14">
          <p className="font-cairo font-bold text-3xl">{num}</p>
          <p className="font-cairo font-bold">{text}</p>
        </div>
      </div>
    </article>
  );
}
