/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from "@/components/fields/InputField";
import Manufacturer from "./components/Manufacturer";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { ManufacturerFormSchema } from "@/types/form-schemas";
import useManufacturers from "@/hooks/useManufacturers";
import { MdFileUpload } from "react-icons/md";
import FileField from "@/components/fields/FileField";

const Manufacturers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { manufacturers, loading, createManufacturer, getManufacturers } =
    useManufacturers();

  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getManufacturers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm<z.infer<typeof ManufacturerFormSchema>>({
    resolver: zodResolver(ManufacturerFormSchema),
  });

  const watchedProfilePic = watch("logo");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (watchedProfilePic) {
      const newValue = typeof watchedProfilePic != "string" ? URL.createObjectURL(watchedProfilePic) : watchedProfilePic;
      setLogo(newValue);

      return () => URL.revokeObjectURL(newValue);
    }
  }, [watchedProfilePic]);

  const onSubmit = (data: z.infer<typeof ManufacturerFormSchema>) => {
    const { logo, description, name } = data;
    const formData = new FormData();
    formData.append("file", logo);
    formData.append("name", name);
    formData.append("description", description);
    createManufacturer(formData);
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
              <div
                className="col-span-5 w-[40%] h-60 rounded-full bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6 flex flex-col items-center justify-center border-gray-200 dark:!border-navy-700 cursor-pointer"
                onClick={() => fileRef.current?.click()}
              >
                              {logo ? (
                <img src={logo} alt="" className="w-full h-full rounded-full" />
              ) : (
                <>
                  <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
                  <h4 className="text-xl font-bold text-brand-500 dark:text-white">
                    Upload logo
                  </h4>
                </>
              )}
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
              <FileField
                variant="auth"
                extra="mb-3 hidden"
                name="logo"
                error={errors.logo}
                ref={fileRef}
                control={control}
                defaultValue=""
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
                className="w-full self-center linear rounded-md bg-brand-500 text-white p-3 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
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
