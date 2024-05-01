// Icon Imports
import { MdHome, MdPerson } from "react-icons/md";
import { FaJediOrder, FaProductHunt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { lazy } from "react";
// import MainDashboard from "";
// import Profile from ;
// import Orders from ;
// import Products from ;
// import Categories from ;
// import Manufacturers from
// import Product from ;
// import ProductsWrapper from ;
// import CreateProduct from ;

const MainDashboard = lazy(() => import("src/views/admin/default"));
const Profile = lazy(() => import("src/views/admin/profile"));
const Orders = lazy(() => import("./views/admin/orders"));
const Products = lazy(() => import("./views/admin/products"));
const Categories = lazy(() => import("./views/admin/categories"));
const Manufacturers = lazy(() => import("./views/admin/manufacturers"));
const Product = lazy(() => import("./views/admin/products/components/Product"));
const ProductsWrapper = lazy(() => import("./providers/ProductsWrapper"));
const CreateProduct = lazy(
  () => import("./views/admin/products/components/CreateProduct"),
);

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
    component: <ProductsWrapper />,
    children: [
      {
        path: "",
        component: <Products />,
      },
      {
        path: "create",
        component: <CreateProduct />,
      },
      {
        path: ":productId",
        component: <Product />,
      },
    ],
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
