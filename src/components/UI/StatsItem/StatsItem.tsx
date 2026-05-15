// import ProjItem from "assets/proj-item.svg";
import type { IconType } from "react-icons";
export default function StatsItem({
  text,
  num,
  Icon,
}: {
  text: string;
  num: number;
  Icon: IconType;
}) {
  return (
    <article className="lg:w-[24%] bg-midsky py-5 px-2 lg:p-5 xl:p-10 shadow-item rounded-xl max-lg:mb-5">
      <div className="flex justify-between">
        <Icon className="text-4xl" />
        <div className="max-w-20">
          <p className="font-cairo font-bold text-3xl text-center">{num}</p>
          <p className="font-cairo font-bold">{text}</p>
        </div>
      </div>
    </article>
  );
}
