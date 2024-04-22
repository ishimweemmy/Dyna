/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from "@/components/fields/InputField";
import Category from "./components/Category";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { CategoryFormSchema } from "@/types/form-schemas";
import { FaTrash } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";
import useCategories from "@/hooks/useCategories";

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { categories, loading, createCategory, getCategories } =
    useCategories();

  useEffect(() => {
    getCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof CategoryFormSchema>>({
    resolver: zodResolver(CategoryFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subCategories",
  });

  const watchSubCategoriesArray = watch("subCategories");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchSubCategoriesArray[index],
    };
  });

  const onSubmit = (data: z.infer<typeof CategoryFormSchema>) => {
    createCategory(data);
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
          create a new category
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
                Create a new category
              </span>
              <InputField
                variant="auth"
                extra="mb-3"
                label="Category name*"
                placeholder="Enter the category name"
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
                label="Category description*"
                placeholder="Enter the category description"
                id="description"
                name="description"
                type="text"
                error={errors.description}
                register={register}
                disabled={loading}
              />

              {watchSubCategoriesArray &&
                watchSubCategoriesArray.length > 0 && (
                  <span className="my-2">Sub categories</span>
                )}
              <div className="w-full flex flex-col items-center justify-center">
                {controlledFields.map((field, idx) => {
                  return (
                    <div
                      className="w-full flex items-center justify-center gap-3"
                      key={field.id}
                    >
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label=""
                        placeholder="Enter the category name"
                        id="description"
                        name={`subCategories.${idx}.name` as const}
                        type="text"
                        error={
                          errors.subCategories &&
                          errors.subCategories[idx]?.name
                        }
                        register={register}
                        inputStyles="h-9"
                        disabled={loading}
                      />
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label=""
                        placeholder="Enter the category description"
                        id="description"
                        name={`subCategories.${idx}.description` as const}
                        type="text"
                        error={
                          errors.subCategories &&
                          errors.subCategories[idx]?.description
                        }
                        register={register}
                        inputStyles="h-9"
                        disabled={loading}
                      />
                      <div className="grid place-items-center rounded-md p-1 ring-1 ring-brand-500 hover:text-white hover:bg-brand-500 cursor-pointer transition-all mb-6">
                        <TbTrash onClick={() => remove(idx)} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                className="w-1/3 self-start linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 mb-4 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                onClick={() => {
                  const isSubCategoriesEmpty = watchSubCategoriesArray.find(
                    (category) =>
                      category.name === "" || category.description === "",
                  );
                  if (isSubCategoriesEmpty) {
                    setError("subCategories", {
                      message: "please fill this field",
                    });
                  } else {
                    append({ name: "", description: "" });
                  }
                }}
                disabled={loading}
              >
                Add sub category
              </button>
              <button
                className="w-1/2 self-end linear rounded-md bg-brand-500 text-white px-3 py-2 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                disabled={loading}
              >
                create category
              </button>
            </form>
          </ModalContent>
        </Modal>
      </div>
      <div className="w-full grid grid-cols-4 gap-8">
        {categories.map((item, idx) => {
          return <Category {...item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
