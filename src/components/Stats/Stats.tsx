import ProjItem from "../../assets/proj-item.svg";

export default function Stats() {
  return (
    <div className="container flex justify-between">
      <article className="w-[22.5%] bg-midsky p-10 shadow-item rounded-xl">
        <div className="flex justify-between">
          <img src={ProjItem} alt="project icon" />
          <div className="max-w-14">
            <p className="font-cairo font-bold text-3xl">120</p>
            <p className="font-cairo font-bold">Project</p>
          </div>
        </div>
      </article>
      <article className="w-[22.5%] bg-midsky p-10 shadow-item rounded-xl">
        <div className="flex justify-between">
          <img src={ProjItem} alt="project icon" />
          <div className="max-w-14">
            <p className="font-cairo font-bold text-3xl">120</p>
            <p className="font-cairo font-bold">Project</p>
          </div>
        </div>
      </article>
      <article className="w-[22.5%] bg-midsky p-10 shadow-item rounded-xl">
        <div className="flex justify-between">
          <img src={ProjItem} alt="project icon" />
          <div className="max-w-14">
            <p className="font-cairo font-bold text-3xl">120</p>
            <p className="font-cairo font-bold">Project</p>
          </div>
        </div>
      </article>
      <article className="w-[22.5%] bg-midsky p-10 shadow-item rounded-xl">
        <div className="flex justify-between">
          <img src={ProjItem} alt="project icon" />
          <div className="max-w-14">
            <p className="font-cairo font-bold text-3xl">120</p>
            <p className="font-cairo font-bold">Project</p>
          </div>
        </div>
      </article>
    </div>
  );
}
