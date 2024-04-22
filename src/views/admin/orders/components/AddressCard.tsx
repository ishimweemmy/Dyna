import { FC } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";

const AddressCard: FC<{
  title: string;
  addressNickname: string;
  customer: string;
  address: string;
  phoneNumber: string;
}> = ({ title, addressNickname, customer, address, phoneNumber }) => {
  return (
    <div className="w-1/2 flex flex-col items-start justify-center gap-3 p-4 ring-1 ring-gray-200 text-sm rounded-md text-black/70">
      <div className="w-full flex items-center justify-between">
        <span className="text-base font-bold">{title}</span>
        <MdOutlineLocalShipping className="text-brand-500 text-sm" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <span>Name: </span>
        <span>{addressNickname}</span>
      </div>
      <span>{customer}</span>
      <span>{address}</span>
      <div className="flex items-center justify-center gap-2">
        <IoCallOutline />
        <span>{phoneNumber}</span>
      </div>
    </div>
  );
};

export default AddressCard;
