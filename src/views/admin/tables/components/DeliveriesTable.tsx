import React from "react";
import CardMenu from "src/components/card/CardMenu";
import Card from "src/components/card";
import { MdCancel, MdCheckCircle, MdPending, MdRefresh } from "react-icons/md";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Checkbox from "src/components/checkbox";
import Order from "../../orders/components/Order";
import { orderProductsData } from "../variables/tableDataOrder";

type RowObj = {
  id: string;
  date: string;
  status: "pending" | "shipped" | "cancelled" | "completed";
  customer: number;
  email: string;
  phoneNumber: string;
  revenue: number;
};

const columnHelper = createColumnHelper<RowObj>();

export default function OrdersTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">ID</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <Checkbox
            defaultChecked={false}
            colorScheme="brandScheme"
            me="10px"
          />
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "completed" ? (
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
          ) : info.getValue() === "cancelled" ? (
            <MdCancel className="text-red-500 me-1 dark:text-red-300" />
          ) : info.getValue() === "shipped" ? (
            <MdRefresh className="text-yellow-400 me-1" />
          ) : (
            <MdPending className="text-navy-700 me-1 dark:text-amber-300" />
          )}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("customer", {
      id: "customer",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          CUSTOMER
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("email", {
      id: "email",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">EMAIL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("phoneNumber", {
      id: "phoneNumber",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          CONTACT NUMBER
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("id", {
      id: "action",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          TAKE ACTION
        </p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <Order
            orderId={info.getValue()}
            tableData={orderProductsData}
            orderTableData={info.row.original}
          />
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white flex flex-col">
          <span>Orders Table</span>
          <span className="text-sm font-normal text-gray-700">
            view all the orders that have been made in the
          </span>
        </div>
        <CardMenu />
      </div>

      <div className="mt-4 overflow-x-scroll xl:overflow-x-hidden flex flex-col">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="min-w-[150px] border-white/0 py-3  pr-4"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
