import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import Card from "src/components/card";
import { pieChartData, pieChartOptions } from "@/variables/charts";
import PieChart from "src/components/charts/PieChart";
import { BsPhone } from "react-icons/bs";
import WidgetH from "src/components/widget/WidgetH";

const categories = [
  {
    icon: <BsPhone className="" />,
    name: "Group A",
    someProducts: ["nails", "sheets", "paints", "hammer"],
    earn: "90k",
  },
  {
    icon: <BsPhone className="" />,
    name: "Group B",
    someProducts: ["nails", "sheets", "paints", "hammer"],
    earn: "90k",
  },
  {
    icon: <BsPhone className="" />,
    name: "Group C",
    someProducts: ["nails", "sheets", "paints", "hammer"],
    earn: "90k",
  },
  {
    icon: <BsPhone className="" />,
    name: "Group D",
    someProducts: ["nails", "sheets", "paints", "hammer"],
    earn: "90k",
  },
];

const OrderStats = () => {
  const [tooltipVisible, setToolTipVisible] = useState(false);

  return (
    <Card extra="col-span-2 p-8 justify-center">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <span className="text-xl font-semibold text-navy-700 dark:text-white">
            Order Statistics
          </span>
          <p className="text-sm text-gray-600">42.75k Total Sales </p>
        </div>
        <div className="relative cursor-pointer self-start pt-2">
          <MdMoreVert onClick={() => setToolTipVisible((prev) => !prev)} />
          {tooltipVisible && (
            <div
              className="flex flex-col bg-lightPrimary shadow-xl shadow-shadow-400 rounded-xl absolute w-[8rem] inset-[0px_0px_auto_auto] translate-x-2 translate-y-6 pl-2 py-2 transition-all z-[1999]"
              tabIndex={0}
            >
              <span className="text-gray-900 hover:bg-brand-500 hover:text-white rounded-md hover:p-1 px-2 transition-all duration-500">
                share
              </span>
              <span className="text-gray-900 hover:bg-brand-500 hover:text-white rounded-md hover:p-1 px-2 transition-all duration-500">
                update
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-1 pr-8">
          <span className="text-2xl font-bold text-navy-700 dark:text-white">
            8,258
          </span>
          <p className="text-sm text-gray-600 whitespace-nowrap">
            Total Orders{" "}
          </p>
        </div>
        <PieChart chartOptions={pieChartOptions} chartData={pieChartData} />
      </div>
      <div className="w-full grid grid-cols-1 gap-x-6">
        {categories.map((category, _id) => {
          const { icon, name, someProducts, earn } = category;
          return (
            <WidgetH
              icon={icon}
              name={name}
              someProducts={someProducts}
              key={_id}
              earns={earn}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default OrderStats;
