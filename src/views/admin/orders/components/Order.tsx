import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { FC } from "react";

const Order: FC<{ orderId: string }> = ({ orderId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(orderId);
  return (
    <>
      <button
        className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 active:border-brand-600 0 hover:bg-brand-500 hover:text-white"
        onClick={onOpen}
      >
        view order details
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>some other shit</ModalBody>

          <ModalFooter className="w-full flex justify-between items-center">
            <button
              className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 active:border-brand-600 0 hover:bg-brand-500 hover:text-white"
              onClick={onClose}
            >
              Close
            </button>
            <button className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 active:border-brand-600 0 hover:bg-brand-500 hover:text-white">
              Edit
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Order;
