import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { FC, useState } from "react";
import {
  MdCancel,
  MdCheckCircle,
  MdClose,
  MdPending,
  MdRefresh,
} from "react-icons/md";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Card from "src/components/card";
import OrderFlexCol from "./OrderFlexCol";
import AddressCard from "./AddressCard";
import { useLocation } from "react-router-dom";
import AddDelivery from "./AddDelivery";
import Delivery from "./Delivery";

type RowObj = {
  id: string;
  image: string;
  name: string;
  revenue: number;
  units: number;
};

const columnHelper = createColumnHelper<RowObj>();

const Order: FC<{ orderId: string; tableData: any; orderTableData: any }> = ({
  orderId,
  tableData,
  orderTableData,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const page = pathname.split("/")[2];

  const { status, customer, email, phoneNumber, date } = orderTableData;

  const [sorting, setSorting] = useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("image", {
      id: "image",
      header: () => <p className="text-sm font-bold text-gray-600 ">Product</p>,
      cell: (info: any) => (
        <div className="flex items-center">
          <img
            src={info.getValue()}
            alt={info.getValue() + "image"}
            className="w-12 h-12"
          />
        </div>
      ),
    }),
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 ">Product Name</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700  flex flex-col items-start justify-center gap-1 whitespace-nowrap">
          <span>{info.getValue()}</span>
          <span className="font-normal text-black/50">
            frw {info.row.getValue("revenue")} * {info.row.getValue("units")}
          </span>
        </p>
      ),
    }),
    columnHelper.accessor("revenue", {
      id: "revenue",
      header: () => (
        <p className="text-sm font-bold text-gray-600 ">Price on unit</p>
      ),
      cell: (info) => (
        <p className="text-sm text-navy-700 font-normal ">
          frw {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("revenue", {
      id: "totalPrice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 ">Total price</p>
      ),
      cell: (info) => (
        <p className="text-sm text-navy-700 font-normal ">
          frw {info.getValue() * info.row.original.units}
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
        <ModalContent
          className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4 bg-lightPrimary"
          maxWidth={700}
        >
          <div className="w-full flex items-center justify-between border-b py-3">
            <span className="font-bold text-black/50">Order Details</span>
            <MdClose onClick={onClose} className="cursor-pointer" />
          </div>
          <Card extra="w-full gap-10">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>
                Order No :{" "}
                <b className="text-brand-500 font-normal">#{orderId}</b>
              </span>
              <div className="flex items-center">
                {status === "completed" ? (
                  <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
                ) : status === "cancelled" ? (
                  <MdCancel className="text-red-500 me-1 dark:text-red-300" />
                ) : status === "shipped" ? (
                  <MdRefresh className="text-yellow-400 me-1" />
                ) : (
                  <MdPending className="text-navy-700 me-1 dark:text-amber-300" />
                )}
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {status}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <OrderFlexCol label="Order Created at" value={date} />
              <OrderFlexCol label="Name" value={customer} />
              <OrderFlexCol label="Email" value={email} />
              <OrderFlexCol label="Contact No" value={phoneNumber} />
            </div>
            <div className="w-full flex gap-4">
              <AddressCard
                address="29543 South Plaza"
                addressNickname="Home"
                customer={customer}
                phoneNumber="07897065778"
                title="Delivery Address"
              />
              <AddressCard
                address="kigali downtown Makuza plaza"
                addressNickname="Workplace"
                customer={customer}
                phoneNumber="07897069078"
                title="Billing Address"
              />
            </div>
          </Card>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="!border-px !border-gray-400 !w-fit"
                  >
                    {headerGroup.headers.slice(0, 4).map((header) => {
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
                        .slice(0, 4)
                        .map((cell) => {
                          return (
                            <td
                              key={cell.id}
                              className="min-w-[80px] border-white/0 py-3  pr-4"
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
            <div className="w-full flex items-center justify-between">
              {page == "deliveries" && (
                <>
                  <AddDelivery status={status} />
                  <Delivery status={status} />
                </>
              )}
              <div className="flex gap-3 self-end p-2 px-4 text-sm font-bold text-white bg-brand-500">
                <span>Net price:</span>
                <span>Frw 74200</span>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Order;
