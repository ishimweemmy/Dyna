import { Input, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import { MdClose } from "react-icons/md"

const AddDelivery:FC<{status: string}> = ({status}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button className={`${status !== "pending" ? "bg-slate-300 cursor-not-allowed text-slate-600": "text-brand-500 border border-brand-500"} text-sm p-2 w-1/3 rounded-md self-end`} disabled={status !== "pending"} onClick={onOpen}>Deliver</button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4" maxWidth={600}>
                    <div className="w-full flex items-center justify-between border-b py-2 pb-4 mb-2">
                        <span className="font-bold text-black/50">Enter the details below to start the delivery</span>
                        <MdClose onClick={onClose} className="cursor-pointer" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-1 text-sm">
                        <span className="">Carrier name:</span>
                        <Input variant='outline' placeholder="Enter the carrier name" name="name" className="!text-sm" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-1 text-sm">
                        <span className="">Carrier phone number:</span>
                        <Input variant='outline' placeholder="Enter the carrier phone number" name="phoneNumber" className="!text-sm" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-1 text-sm">
                        <span className="">Tracking number:</span>
                        <Input variant='outline' placeholder="Enter the tracking number" name="trackingNumber" className="!text-sm" />
                    </div>
                    <button className="w-1/2 p-2 text-white bg-brand-500 rounded-md text-sm">Place delivery</button>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddDelivery