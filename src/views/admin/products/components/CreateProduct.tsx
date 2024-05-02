/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { MdClose, MdFileUpload } from "react-icons/md";
import InputField from "@/components/fields/InputField";
import { CreateProductFormSchema } from "@/types/form-schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import useManufacturers from "@/hooks/useManufacturers";
import useCategories from "@/hooks/useCategories";
import { createRef, useEffect, useState } from "react";
import SelectField from "@/components/fields/SelectField";
import useProducts from "@/hooks/useProducts";
import FileField from "@/components/fields/FileField";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AVAILABILITY_STATUSES } from "../../constants";

const CreateProduct = () => {
  const [newProductId, setNewProductId] = useState("");
  const { createProduct, loading, createIllustrations } = useProducts();
  const { manufacturers } = useManufacturers();
  const { categories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
    watch,
    setError,
  } = useForm<Omit<z.infer<typeof CreateProductFormSchema>, "illustrations">>({
    resolver: zodResolver(
      CreateProductFormSchema.omit({ illustrations: true }),
    ),
    defaultValues: {
      brand: "",
      categories: [],
      manufacturer: "",
      subCategories: [],
      company: "",
      crossedPrice: 0,
      discount: 0,
      instock: 0,
      name: "",
      price: 0,
      status: AVAILABILITY_STATUSES[0].value,
      warranty: "",
    },
    mode: "onChange",
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2,
    control: control2,
    watch: watch2,
    setError: setError2,
  } = useForm<Pick<z.infer<typeof CreateProductFormSchema>, "illustrations">>({
    resolver: zodResolver(
      CreateProductFormSchema.pick({ illustrations: true }),
    ),
    defaultValues: {
      illustrations: [],
    },
    mode: "onChange",
  });

  const watchCategories = watch("categories");

  const subCategories = categories
    .filter((category) => watchCategories.includes(category.id))
    .flatMap((category) =>
      category.subCategories.map((subCat) => ({
        label: subCat.name,
        value: subCat.id,
      })),
    );

  const onSubmit = async (
    data: Omit<z.infer<typeof CreateProductFormSchema>, "illustrations">,
  ) => {
    const productId = await createProduct(data);
    setNewProductId(productId);
  };

  const { fields, append, remove } = useFieldArray({
    control: control2,
    name: "illustrations",
  });

  const watchIllustrations = watch2("illustrations");

  const controlledIllFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchIllustrations[index],
    };
  });

  const onIllustrationsSubmit = (
    data: Pick<z.infer<typeof CreateProductFormSchema>, "illustrations">,
  ) => {
    const formData = new FormData();
    data.illustrations.forEach((illustration) => {
      formData.append(
        "files",
        illustration.file as File,
        `${illustration.color}-${illustration.description}`,
      );
    });
    createIllustrations(newProductId, formData);
  };

  const handleCancel = () => reset();

  return (
    <div className="mt-5">
      {newProductId ? (
        <motion.form
          initial={{ opacity: 0, x: "var(--initial-x)" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full md:pl-4 flex flex-col items-center justify-center gap-10 [initial-x:800px]`}
          onSubmit={handleSubmit2(onIllustrationsSubmit)}
          noValidate
        >
          <div
            className={cn(
              "w-full",
              watchIllustrations.length > 2 && "grid grid-cols-2 gap-10",
            )}
          >
            {controlledIllFields.map((field, idx) => {
              const ref = createRef<HTMLInputElement>();
              const newValue =
                typeof field.file != "string"
                  ? URL.createObjectURL(field.file)
                  : field.file;
              return (
                <div
                  className="w-full flex items-center justify-between gap-6"
                  key={field.id}
                >
                  <div
                    className="col-span-5 w-[40%] h-60 bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6 flex flex-col items-center justify-center border-gray-200 dark:!border-navy-700 cursor-pointer overflow-clip"
                    onClick={() => ref.current?.click()}
                  >
                    {newValue ? (
                      <img
                        src={newValue}
                        alt="logo image"
                        className="max-w-full w-full h-full font-extralight align-middle  object-cover object-top"
                      />
                    ) : (
                      <>
                        <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
                        <h4 className="text-xl font-bold text-brand-500 dark:text-white">
                          Upload logo
                        </h4>
                      </>
                    )}
                  </div>

                  <div className="w-[60%] flex flex-col items-center justify-center gap-3">
                    <FileField
                      variant="auth"
                      extra="mb-3 hidden"
                      name={`illustrations.${idx}.file` as const}
                      error={
                        errors2.illustrations &&
                        errors2.illustrations[idx]?.file
                      }
                      ref={ref}
                      control={control2}
                      accept="image/jpg, image/jpeg, image/png"
                    />
                    <InputField
                      variant="auth"
                      extra="mb-3"
                      label="Product image color*"
                      placeholder="Enter the product color"
                      id="color"
                      name={`illustrations.${idx}.color` as const}
                      type="text"
                      error={
                        errors2.illustrations &&
                        errors2.illustrations[idx]?.color
                      }
                      register={register2}
                      disabled={loading}
                    />
                    <InputField
                      variant="auth"
                      extra="mb-3"
                      label="Product image description*"
                      placeholder="Enter the product description"
                      id="description"
                      name={`illustrations.${idx}.description` as const}
                      type="text"
                      error={
                        errors2.illustrations &&
                        errors2.illustrations[idx]?.description
                      }
                      register={register2}
                      disabled={loading}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {controlledIllFields.length <= 0 && !isDirty && <p className="my-60 text-gray-400">No Images currently. click the button below to add them.</p>}

          <div className="w-full flex items-center justify-center gap-4">
            <button
              type="button"
              className="w-1/2 linear rounded-md border border-brand-500 text-brand-500 px-3 py-3 text-xs font-bold transition duration-200 uppercase active:border-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
              onClick={() => {
                const emptyIllustration = watchIllustrations.find(
                  (illustration) =>
                    illustration.description === "" ||
                    illustration.color === "" ||
                    illustration.file == "",
                );
                if (emptyIllustration) {
                  controlledIllFields.forEach((field, idx) => {
                    const requiredFields: (keyof ControlledIllustrationField)[] =
                      ["color", "description", "file"];
                    requiredFields.forEach((fieldName) => {
                      if (!field[fieldName]) {
                        setError2(`illustrations.${idx}.${fieldName}`, {
                          message: "please fill this field",
                        });
                      }
                    });
                  });
                } else {
                  append({ file: "", description: "", color: "" });
                }
              }}
              disabled={loading || controlledIllFields.length >= 6}
            >
              Add product image
            </button>
            <button
              className="w-1/2 linear rounded-md bg-brand-500 text-white px-3 py-3 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
              disabled={loading || controlledIllFields.length <= 0}
              type="submit"
            >
              Complete product creation
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.form
          initial={{ opacity: 0, x: "var(--initial-x)" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full grid grid-cols-2 gap-x-4 md:pl-4 [initial-x:800px]`}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Product Units in stock*"
            placeholder="Enter the product Units in stock"
            id="instock"
            name="instock"
            type="number"
            error={errors.instock}
            register={register}
            disabled={loading}
          />

          <SelectField
            label="Product manufacturer*"
            extra="mb-3"
            control={control}
            id="manufacturer"
            name="manufacturer"
            isMulti={false}
            error={errors.manufacturer}
            options={manufacturers.map((manufacturer) => {
              const { name, id } = manufacturer;
              return {
                label: name,
                value: id,
              };
            })}
            disabled={loading}
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
            disabled={loading}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Product price*"
            placeholder="Enter the product price"
            id="price"
            name="price"
            type="number"
            error={errors.price}
            register={register}
            disabled={loading}
          />

          <SelectField
            label="Product status*"
            extra="mb-3"
            control={control}
            id="status"
            name="status"
            isMulti={false}
            error={errors.status}
            options={AVAILABILITY_STATUSES}
          />

          <SelectField
            label="Product sub category*"
            extra="mb-3"
            control={control}
            id="subCategories"
            name="subCategories"
            isMulti
            error={errors.subCategories}
            options={subCategories}
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Product warranty"
            placeholder="Enter the product warranty"
            id="warranty"
            name="warranty"
            type="text"
            error={errors.warranty}
            register={register}
            disabled={loading}
          />
          <div className="w-full flex items-center justify-center gap-4">
            <button
              className="w-full self-center linear rounded-md bg-brand-500 text-white p-3 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
              disabled={loading}
              type="button"
              onClick={handleCancel}
            >
              cancel
            </button>
            <button
              className="w-full self-center linear rounded-md bg-brand-500 text-white p-3 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
              disabled={loading}
            >
              Next
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default CreateProduct;
