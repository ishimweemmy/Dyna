import { type FC } from "react";
import Card from "src/components/card";
import InputField from "@/components/fields/InputField";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ManufacturerFormSchema } from "@/types/form-schemas";
import { TbTrash } from "react-icons/tb";
import useManufacturers from "@/hooks/useManufacturers";
import { IoRefresh } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";

const Manufacturer: FC<TManufacturer> = ({ id, name, description, file }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loading, updateManufacturer, deleteManufacturer } =
    useManufacturers();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof ManufacturerFormSchema>>({
    resolver: zodResolver(ManufacturerFormSchema),
    defaultValues: {
      name,
      description,
      file,
    },
  });

  const onSubmit = (data: z.infer<typeof ManufacturerFormSchema>) => {
    updateManufacturer(data, id);
    reset();
  };

  return (
    <Card extra="w-full p-5 gap-4 ring-1 cursor-pointer" onClick={onOpen}>
      <div className="flex flex-col items-start justify-center gap-2">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-base font-semibold text-gray-700">
          {description}
        </span>
      </div>
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
            <div className="w-full flex gap-4 mb-8">
              <span className="font-bold text-lg text-gray-500 self-start">
                Update manufacturer
              </span>
              <button
                type="button"
                className="flex items-center justify-center ml-auto ring-1 p-1 rounded-md ring-brand-500 text-brand-500 hover:text-white hover:bg-brand-500 transition-all"
                disabled={loading}
                onClick={() => deleteManufacturer(id, onClose)}
              >
                <TbTrash className="text-lg" />
                <span className="text-sm">Delete</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center"
                disabled={loading}
                onClick={() => reset()}
              >
                <IoRefresh className="text-lg" />
                <span className="text-sm">Refresh</span>
              </button>
            </div>
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
            <div className="col-span-5 w-[40%] rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
              <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
                <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
                <h4 className="text-xl font-bold text-brand-500 dark:text-white">
                  update product's images
                </h4>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  PNG, JPG and GIF files are allowed
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  Note that the first image will be the cover image
                </p>
              </button>
            </div>
            <button
              className="w-1/2 linear rounded-md bg-brand-500 text-white px-3 py-2 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
              disabled={loading}
            >
              Update manufacturer
            </button>
          </form>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Manufacturer;
