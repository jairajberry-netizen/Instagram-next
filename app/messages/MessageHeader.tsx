import { ChevronDown, SquarePen } from "lucide-react";

const MessageHeader = () => {
  return (
    <div className="flex  pt-8 px-4 pb-4 justify-between items-center w-full">
      <div className="text-white flex text-xl font-extrabold items-center gap-1 ">
        jairaj.berry30
        <ChevronDown size={20} className="cursor-pointer" />
      </div>
      <div className="">
        <SquarePen color="white" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default MessageHeader;
