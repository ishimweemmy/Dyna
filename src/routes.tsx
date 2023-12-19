import MainDashboard from "src/views/admin/default";
import Profile from "src/views/admin/profile";
import DataTables from "src/views/admin/tables";

// Icon Imports
import {
  MdHome,
  MdPerson,
} from "react-icons/md";
import Orders from "./views/admin/orders";
import { FaJediOrder } from "react-icons/fa";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "orders",
    icon: <FaJediOrder className="h-6 w-6" />,
    component: <Orders />,
  },
];
export default routes;
