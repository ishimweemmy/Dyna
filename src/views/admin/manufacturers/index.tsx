/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from "@/components/fields/InputField";
import Manufacturer from "./components/Manufacturer";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { ManufacturerFormSchema } from "@/types/form-schemas";
import useManufacturers from "@/hooks/useManufacturers";

const Manufacturers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { manufacturers, loading, createManufacturer, getManufacturers } =
    useManufacturers();

  useEffect(() => {
    getManufacturers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof ManufacturerFormSchema>>({
    resolver: zodResolver(ManufacturerFormSchema),
  });

  const onSubmit = (data: z.infer<typeof ManufacturerFormSchema>) => {
    createManufacturer(data);
    reset();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 mt-5">
      <div className="w-full flex justify-between items-center">
        <button className="linear rounded-md bg-brand-500 px-3 py-2 text-xs font-bold text-white transition duration-200 uppercase hover:bg-brand-700 active:bg-brand-600">
          View all products
        </button>
        <button
          className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
          onClick={onOpen}
          disabled={loading}
        >
          create a new manufacturer
        </button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent
            className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4 bg-lightPrimary"
            maxWidth={700}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="w-full flex flex-col items-center md:pl-4"
            >
              <span className="font-bold text-lg text-gray-500 self-start mb-4">
                Create a new manufacturer
              </span>
              <InputField
                variant="auth"
                extra="mb-3"
                label="Manufacturer name*"
                placeholder="Enter the manufacturer name"
                id="name"
                name="name"
                type="text"
                error={errors.name}
                register={register}
                disabled={loading}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Manufacturer description*"
                placeholder="Enter the manufacturer description"
                id="description"
                name="description"
                type="text"
                error={errors.description}
                register={register}
                disabled={loading}
              />

              <button
                className="w-1/2 self-end linear rounded-md bg-brand-500 text-white px-3 py-2 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                disabled={loading}
              >
                create manufacturer
              </button>
            </form>
          </ModalContent>
        </Modal>
      </div>
      <div className="w-full grid grid-cols-4 gap-8">
        {manufacturers.map((item, idx) => {
          return <Manufacturer {...item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Manufacturers;
