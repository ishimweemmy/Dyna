import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type RowObj = {
  id: string;
  image: string;
  name: string;
  revenue: number;
  units: number
};

const columnHelper = createColumnHelper<RowObj>();

const Order: FC<{ orderId: string, tableData: any  }> = ({ orderId, tableData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [sorting, setSorting] = useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("image", {
      id: "image",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Product</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <img src={info.getValue()} alt={info.getValue() + "image"} className="w-12 h-12" />
        </div>
      ),
    }),
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Product Name</p>
        ),
        cell: (info) => (
          <p className="text-sm font-bold text-navy-700 dark:text-white flex flex-col items-start justify-center gap-1 whitespace-nowrap">
            <span>{info.getValue()}</span>
            <span className="font-normal text-black/50">frw {info.row.getValue("revenue")} * {info.row.getValue("units")}</span>
          </p>
      ),
    }),
    columnHelper.accessor("revenue", {
      id: "revenue",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Price
        </p>
      ),
      cell: (info) => (
        <p className="text-sm text-navy-700 font-normal dark:text-white">
          frw {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("units", {
      id: "units",
      header: () => null,
      cell: () => null,
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = useState(() => [...defaultData]);
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
    <div>
      <button
        className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 active:border-brand-600 0 hover:bg-brand-500 hover:text-white"
        onClick={onOpen}
      >
        view order details
      </button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent className="w-full p-5 px-10 flex flex-col items-start justify-center gap-4" maxWidth={600}>
          <div className="w-full flex items-center justify-between border-b py-3">
            <span className="font-bold text-black/50">Order Details</span>
            <MdClose />
          </div>
          <div className="flex flex-col items-center justify-start text-base gap-2">
            <span className="">Order no.<b className="text-brand-500 font-normal text-sm">{orderId}</b> from <b className="text-brand-500 font-normal text-sm">23.02.2021</b></span>
            <span className="">Billing name: <b className="text-brand-500 font-normal text-sm">Neal Matthews</b></span>
          </div>
          <div className="w-full flex items-center justify-center">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="!border-px !border-gray-400 !w-fit">
                    {headerGroup.headers.slice(0, 3).map((header) => {
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
                              header.getContext()
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
                {table
                  .getRowModel()
                  .rows
                  .map((row) => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().slice(0, 3).map((cell) => {
                          return (
                            <td
                              key={cell.id}
                              className="min-w-[80px] border-white/0 py-3  pr-4"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
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
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Order;
