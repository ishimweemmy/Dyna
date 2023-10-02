/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "src/components/sidebar/componentsrtl/SidebarCard";
import routes from "src/routes";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-3xlxl shadow-shadow-500 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 mt-[2rem] ml-[2rem] rounded-xl ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[20px] flex items-center cursor-pointer`}>
        <div className="mt-1 ml-1 h-2.5 font-logo text-[26px] font-bold uppercase text-brand-500 dark:text-white">
          Dyna
        </div>
      </div>
      <div className="mt-[50px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
};

export default Sidebar;
