import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-2 w-auto h-[27px] rounded-full">
      <p className="text-[10px] ">{title}</p>
    </div>
  );
};

export default Pill;
