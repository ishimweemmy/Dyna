import Card from "src/components/card";
import { BsPhone } from "react-icons/bs";
import { MdArrowDropUp, MdComputer } from "react-icons/md";

const LiveVisitors = () => {
  return (
    <Card extra="!grid grid-cols-3 p-5 gap-y-6">
      <div className="w-full flex flex-col items-start justify-center gap-4 animate-">
        <span className="text-lg font-medium whitespace-nowrap">
          Live Visits
        </span>
        <span className="text-xs font-medium whitespace-nowrap">
          Total 200k visitors are live!{" "}
        </span>
        <div className=" flex items-center justify-start gap-2">
          <span className="rounded-md bg-yellow-100 grid justify-items-center p-1">
            <BsPhone className="text-sm  text-yellow-500" />
          </span>
          <span className="text-sm mt-3">Mobile</span>
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-xl font-semibold">20%</span>
          <span className="text-xs text-gray-700">2,890</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-2">
        <span className="px-2 py-1 bg-gray-200 rounded-full relative before:absolute before:border before:border-gray-200 before:translate-x-2 before:-translate-y-7 before:h-5 after:absolute after:border after:border-gray-200 after:-translate-x-2 after:translate-y-8 after:h-5 text-gray-700 mb-6">
          vs
        </span>
      </div>
      <div className="w-full flex flex-col items-end justify-center gap-16">
        <div className="flex items-center justify-center">
          <p className="text-sm font-bold text-green-500"> +2.45% </p>
          <MdArrowDropUp className="font-medium text-green-500" />
        </div>
        <div className="flex flex-col items-end justify-center gap-3">
          <div className=" flex items-center justify-start gap-2 flex-row-reverse">
            <span className="rounded-md bg-brand-100 grid justify-items-center p-1">
              <MdComputer className="text-sm  text-brand-500" />
            </span>
            <span className="text-sm">Desktop</span>
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-xl font-semibold">80%</span>
            <span className="text-xs text-gray-700">2,890</span>
          </div>
        </div>
      </div>
      <div className="w-full flex rounded-xl col-span-3 h-3">
        <div className="w-[80%] bg-yellow-500 rounded-l-xl"></div>
        <div className="w-[20%] bg-brand-500 rounded-r-xl"></div>
      </div>
    </Card>
  );
};

export default LiveVisitors;
