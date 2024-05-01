import React from "react";
import CardMenu from "src/components/card/CardMenu";
import Card from "src/components/card";
import { MdCancel, MdCheckCircle } from "react-icons/md";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { FaProductHunt } from "react-icons/fa";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper<TProduct>();

export default function ProductsTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns = [
    columnHelper.accessor("illustrations", {
      id: "illustrations",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">IMAGE</p>
      ),
      cell: (info) => {
        return info.getValue().length > 0 && info.getValue()[0].imageUrl ? (
          <img
            src={info.getValue()[0].imageUrl}
            alt="product image"
            className="w-14 h-14"
          />
        ) : (
          <FaProductHunt />
        );
      },
    }),
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PRODUCT NAME
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("manufacturer", {
      id: "manufacturer",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          MANUFACTURER
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue().name}
        </p>
      ),
    }),
    columnHelper.accessor("brand", {
      id: "brand",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">BRAND</p>
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
          {info.getValue() === "AVAILABLE" ? (
            <>
              <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                In stock
              </p>
            </>
          ) : (
            <>
              <MdCancel className="text-red-500 me-1 dark:text-red-300" />
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                Out of stock
              </p>
            </>
          )}
        </div>
      ),
    }),
    columnHelper.accessor("inStock", {
      id: "inStock",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Units in stock
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("crossed_price", {
      id: "crossed_price",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          CROSSED PRICE
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("price", {
      id: "price",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">PRICE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("discount", {
      id: "discount",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          DISCOUNT
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue() <= 0 ? "No discount" : info.getValue()}
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
          <Link
            to={`/admin/products/${info.getValue()}`}
            state={{ ...info.row.original }}
            className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 active:border-brand-600 0 hover:bg-brand-500 hover:text-white"
          >
            view product details
          </Link>
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const table = useReactTable({
    data: tableData,
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
          <span>Products Table</span>
          <span className="text-sm font-normal text-gray-700">
            view all the products
          </span>
        </div>
        <CardMenu />
      </div>

      <div className="mt-4 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers
                  .filter((header) => header.id != "currency")
                  .map((header) => {
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
                  {row
                    .getVisibleCells()
                    .filter((cell) => cell.column.id != "currency")
                    .map((cell) => {
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
