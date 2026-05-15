import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Title({ content }: { content: string }) {
  return (
    <h2 className=" mb-14 flex items-center font-montserrat font-medium text-2xl tracking-normal p-3 text-midblue capitalize bg-gallery ">
      <FaLongArrowAltLeft className="mr-1.5 text-black" />
      {content}
    </h2>
  );
}
