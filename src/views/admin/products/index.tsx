/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import ProductsTable from "../tables/components/ProductsTable";
import { productsData } from "../tables/variables/tableDataOrder";
import { useDisclosure } from "@chakra-ui/hooks";
import { MdClose } from "react-icons/md";
import InputField from "@/components/fields/InputField";
import { CreateProductFormSchema } from "@/types/form-schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useManufacturers from "@/hooks/useManufacturers";
import useCategories from "@/hooks/useCategories";
import { useEffect } from "react";
import SelectField from "@/components/fields/SelectField";

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { manufacturers, getManufacturers } = useManufacturers();
  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories();
    getManufacturers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch
  } = useForm<z.infer<typeof CreateProductFormSchema>>({
    resolver: zodResolver(CreateProductFormSchema),
    defaultValues: {
      brand: "",
      categories: [],
      manufacturer: {
        label: manufacturers[0].name,
        value: manufacturers[0].id
      },
      subCategories: [],
      company: "",
      crossedPrice: 0,
      discount: 0,
      illustrations: [],
      instock: 0,
      name: "",
      price: 0,
      status: "AVAILABLE",
      warranty: "",
    },
  });

  const watchCategories = watch("categories")

  const subCategories = categories
  .filter(category => (watchCategories as unknown as string).includes(category.id))
  .flatMap(category => category.subCategories.map(subCat => ({ label: subCat.name, value: subCat.id })));

  const onSubmit = (data: z.infer<typeof CreateProductFormSchema>) => {
    console.log(data);
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 mt-5">
      <div className="w-full flex justify-between items-center">
        <button className="linear rounded-md bg-brand-500 px-3 py-2 text-xs font-bold text-white transition duration-200 uppercase hover:bg-brand-700 active:bg-brand-600">
          View all orders
        </button>
        <button
          className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
          onClick={onOpen}
          // disabled={loading}
        >
          create a new product
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4 bg-lightPrimary"
          maxWidth={1000}
        >
          <div className="w-full flex items-center justify-between border-b py-3">
            <span className="font-bold text-black/50">
              Create a new product
            </span>
            <MdClose onClick={onClose} className="cursor-pointer" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full flex justify-center items-center md:pl-4"
          >
            <fieldset className="w-full grid grid-cols-2 gap-x-4">
              <InputField
                variant="auth"
                extra="mb-3"
                label="*Brand"
                placeholder="Enter the product brand"
                id="brand"
                name="brand"
                type="text"
                error={errors.brand}
                register={register}
                // disabled={loading}
              />

              <SelectField
                label="*Categories"
                extra="mb-3"
                control={control}
                id="categories"
                name="categories"
                isMulti
                error={errors.categories}
                options={categories.map((category) => {
                  const { name, id } = category;
                  return {
                    label: name,
                    value: id,
                  };
                })}
              />

              <InputField
                variant="auth"
                extra="mb-3"
                label="Product company*"
                placeholder="Enter the product company"
                id="company"
                name="company"
                type="text"
                error={errors.company}
                register={register}
                // disabled={loading}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Product crossed price*"
                placeholder="Enter the product crossed price"
                id="crossedPrice"
                name="crossedPrice"
                type="number"
                error={errors.crossedPrice}
                register={register}
                // disabled={loading}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Product discount*"
                placeholder="Enter the product discount in percentage"
                id="discount"
                name="discount"
                type="number"
                error={errors.discount}
                register={register}
                // disabled={loading}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Product Units in stock*"
                placeholder="Enter the product Units in stock"
                id="instock"
                name="instock"
                type="text"
                error={errors.instock}
                register={register}
                // disabled={loading}
              />

              <SelectField
                label="Product manufacturer*"
                extra="mb-3"
                control={control}
                id="manufacturer"
                name="manufacturer"
                isMulti={false}
                error={errors.manufacturer}
                options={manufacturers.map(manufacturer => {
                  const { name, id} = manufacturer
                  return {
                    label: name,
                    value: id
                  }
                })}
              />

              <InputField
                variant="auth"
                extra="mb-3"
                label="Product name*"
                placeholder="Enter the product name"
                id="name"
                name="name"
                type="text"
                error={errors.name}
                register={register}
                // disabled={loading}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Product price*"
                placeholder="Enter the product price"
                id="price"
                name="price"
                type="text"
                error={errors.price}
                register={register}
                // disabled={loading}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Product status*"
                placeholder="Enter the product status"
                id="status"
                name="status"
                type="text"
                error={errors.status}
                register={register}
                // disabled={loading}
              />
              <SelectField
                label="Product sub category*"
                extra="mb-3"
                control={control}
                id="subCategory"
                name="subCategory"
                isMulti
                error={errors.subCategories}
                options={subCategories}
              />

              <InputField
                variant="auth"
                extra="mb-3"
                label="Product warranty*"
                placeholder="Enter the product warranty"
                id="warranty"
                name="warranty"
                type="text"
                error={errors.warranty}
                register={register}
                // disabled={loading}
              />
              <div className="w-full flex items-center justify-center gap-4">
                <button
                  className="w-full self-center linear rounded-md bg-brand-500 text-white p-3 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                  // disabled={loading}
                  type="button"
                  onClick={handleCancel}
                >
                  cancel
                </button>
                <button
                  className="w-full self-center linear rounded-md bg-brand-500 text-white p-3 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                  // disabled={loading}
                >
                  Next
                </button>
              </div>
            </fieldset>
          </form>
        </ModalContent>
      </Modal>

      <ProductsTable tableData={productsData} />
    </div>
  );
};

export default Products;
