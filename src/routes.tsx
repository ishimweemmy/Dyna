import MainDashboard from "src/views/admin/default";
import Profile from "src/views/admin/profile";

// Icon Imports
import { MdHome, MdPerson } from "react-icons/md";
import Orders from "./views/admin/orders";
import { FaJediOrder, FaProductHunt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Products from "./views/admin/products";
import Categories from "./views/admin/categories";
import Manufacturers from "./views/admin/manufacturers";

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
    name: "Categories",
    layout: "/admin",
    path: "categories",
    icon: <FaProductHunt className="h-5 w-5" />,
    component: <Categories />,
  },
  {
    name: "manufacturers",
    layout: "/admin",
    path: "manufacturers",
    icon: <FaProductHunt className="h-5 w-5" />,
    component: <Manufacturers />,
  },
  {
    name: "Products",
    layout: "/admin",
    path: "products",
    icon: <FaProductHunt className="h-5 w-5" />,
    component: <Products />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "orders",
    icon: <FaJediOrder className="h-5 w-5" />,
    component: <Orders />,
  },
  {
    name: "Deliveries",
    layout: "/admin",
    path: "deliveries",
    icon: <TbTruckDelivery className="h-6 w-6" />,
    component: <Orders />,
  },
];
export default routes;
