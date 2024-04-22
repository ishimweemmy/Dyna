import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdClose } from "react-icons/md";

const Delivery: FC<{ status: string }> = ({ status }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className={`${status !== "shipped" && status !== "completed" ? "bg-slate-300 cursor-not-allowed text-slate-600" : "text-brand-500 border border-brand-500"} text-sm p-2 w-1/3 rounded-md self-end`}
        disabled={status !== "shipped" && status !== "completed"}
        onClick={onOpen}
      >
        view delivery details
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4"
          maxWidth={600}
        >
          <div className="w-full flex items-center justify-between border-b py-2 pb-4 mb-2">
            <span className="font-bold text-black/50">
              View details of the delivery
            </span>
            <MdClose onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="w-full flex items-center justify-start gap-1 text-sm">
            <span className="">Carrier name:</span>
            <span className="font-bold">Ndamage</span>
          </div>
          <div className="w-full flex items-center justify-start gap-1 text-sm">
            <span className="">Carrier phone number:</span>
            <span className="font-bold">+250 785496221</span>
          </div>
          <div className="w-full flex items-center justify-start gap-1 text-sm">
            <span className="">Tracking number:</span>
            <span className="font-bold"># 9089097</span>
          </div>
          <div className="w-9/12 flex items-center justify-start gap-3 text-sm">
            <span className="whitespace-nowrap">
              Delivery status (updatable):
            </span>
            <Select
              name="status"
              className="w-fit !text-sm rounded-md"
              size={"sm"}
            >
              <option value="processing" selected>
                processing
              </option>
              <option value="in_transit">In transit</option>
              <option value="delivered">Delivered</option>
            </Select>
          </div>
          <button
            className="w-1/3 p-2 text-white bg-brand-500 rounded-md text-sm"
            onClick={onClose}
          >
            Close details
          </button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Delivery;
