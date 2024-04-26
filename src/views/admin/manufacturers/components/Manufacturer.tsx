import { useEffect, useRef, useState, type FC } from "react";
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
import FileField from "@/components/fields/FileField";

const Manufacturer: FC<TManufacturer> = ({
  id,
  name,
  description,
  logoUrl,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loading, updateManufacturer, deleteManufacturer } =
    useManufacturers();

  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
    watch,
  } = useForm<z.infer<typeof ManufacturerFormSchema>>({
    resolver: zodResolver(ManufacturerFormSchema),
    defaultValues: {
      name,
      description,
      logo: logoUrl,
    },
  });

  const watchedProfilePic = watch("logo");
  const [logo, setLogo] = useState(logoUrl);

  useEffect(() => {
    if (watchedProfilePic) {
      const newValue =
        typeof watchedProfilePic != "string"
          ? URL.createObjectURL(watchedProfilePic)
          : watchedProfilePic;
      setLogo(newValue);

      return () => URL.revokeObjectURL(newValue);
    }
  }, [watchedProfilePic]);

  const onSubmit = (data: z.infer<typeof ManufacturerFormSchema>) => {
    const { name, logo, description } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", logo);
    updateManufacturer(formData, id);
  };

  return (
    <Card
      extra="w-full p-5 gap-4 ring-1 cursor-pointer !flex-row"
      onClick={onOpen}
    >
      <img src={logoUrl} alt="manufacturer logo image" className="max-w-full w-24 h-24 rounded-full align-middle font-extralight object-cover object-top" />
      <div className="w-[60%] flex flex-col items-start justify-center">
        <span className="text-base font-semibold">{name}</span>
        <span className="text-sm font-semibold text-gray-700">
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
            <div
              className="col-span-5 w-[40%] h-60 rounded-full bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6 flex flex-col items-center justify-center border-gray-200 dark:!border-navy-700 cursor-pointer overflow-clip"
              onClick={() => fileRef.current?.click()}
            >
              {logo ? (
                <img src={logo} alt="logo image" className="max-w-full w-full h-full rounded-full font-extralight align-middle  object-cover object-top" />
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
              accept="image/jpg, image/jpeg, image/png"
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
              disabled={loading || !isDirty}
            >
              udpate manufacturer
            </button>
          </form>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Manufacturer;
