import MiniCalendar from "src/components/calendar/MiniCalendar";
import WeeklyRevenue from "src/views/admin/default/components/WeeklyRevenue";
import TotalSpent from "src/views/admin/default/components/TotalSpent";
import PieChartCard from "src/views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "src/components/widget/Widget";
import CheckTable from "src/views/admin/default/components/CheckTable";
import ComplexTable from "src/views/admin/default/components/ComplexTable";
import DailyTraffic from "src/views/admin/default/components/DailyTraffic";
import TaskCard from "src/views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import SalesOverview from "./components/SalesOverview";
import Ratings from "./components/Ratings";
import Sessions from "./components/Sessions";
import { Swiper, SwiperSlide } from 'swiper/react'
import WeeklySales from "./components/WeeklySales";


const Dashboard = () => {
  return (
    <div className="w-full h-fit grid grid-cols-[56%_20%_20%] gap-6 mt-8">
      <SalesOverview />
      <Ratings />
      <Sessions />
      <WeeklySales />
      {/* <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div> */}
    </div>
  );
};

export default Dashboard;



{/* <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
{/* Charts */}


      {/* Tables & Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        Check Table
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        Traffic chart & Pie Chart

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        Complex Table , Task & Calendar

        <ComplexTable tableData={tableDataComplex} />

        Task chart & Calendar

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div> */}