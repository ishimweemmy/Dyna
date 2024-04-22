import WeeklyRevenue from "src/views/admin/default/components/WeeklyRevenue";
import TotalSpent from "src/views/admin/default/components/TotalSpent";
import SalesOverview from "./components/SalesOverview";
import Ratings from "./components/Ratings";
import Sessions from "./components/Sessions";
import WeeklySales from "./components/WeeklySales";
import TotalVisitors from "./components/TotalVisits";
import LiveVisitors from "./components/LiveVisitors";
import OrderStats from "./components/OrderStats";

const Dashboard = () => {
  return (
    <div className="w-full h-fit grid grid-cols-[30%_23%_20%_20%] gap-6 mt-8">
      <SalesOverview />
      <Ratings />
      <Sessions />
      <WeeklySales />
      <TotalVisitors />
      <LiveVisitors />
      <TotalSpent />
      <WeeklyRevenue />
      <OrderStats />
    </div>
  );
};

export default Dashboard;
