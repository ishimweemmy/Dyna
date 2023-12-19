import React from "react";
import tableDataComplex from "../tables/variables/tableDataComplex";
import OrdersTable from "../tables/components/OrdersTable";
import { ordersData } from "../tables/variables/tableDataOrder";

const Orders = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 mt-5">
      <div className="w-full flex justify-between items-center">
        <button className="linear rounded-md bg-brand-500 px-3 py-2 text-xs font-bold text-white transition duration-200 uppercase hover:bg-brand-700 active:bg-brand-600">
          View all products
        </button>
        <button className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 0">
          export csv
        </button>
      </div>
      <OrdersTable tableData={ordersData} />
    </div>
  );
};

export default Orders;
