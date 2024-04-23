import { type FC } from "react";
import Card from "src/components/card";
import InputField from "@/components/fields/InputField";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryFormSchema } from "@/types/form-schemas";
import { TbTrash } from "react-icons/tb";
import useCategories from "@/hooks/useCategories";
import { IoRefresh } from "react-icons/io5";

const Category: FC<TCategory> = ({ id, name, description, subCategories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loading, updateCategory, deleteCategory } = useCategories();

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
    defaultValues: {
      name,
      description,
      subCategories,
    },
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
    updateCategory(data, id);
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
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-sm font-semibold underline">Subcategories</span>
        <div className="flex items-center justify-start gap-4 flex-wrap">
          {subCategories.map((category) => {
            return (
              <div className="w-max flex flex-col gap-1 text-xs">
                <span className="font-semibold text-brand-500">
                  {category.name}
                </span>
                <span className="text-gray-700">{category.description}</span>
              </div>
            );
          })}
        </div>
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
                Update category
              </span>
              <button
                type="button"
                className="flex items-center justify-center ml-auto ring-1 p-1 rounded-md ring-brand-500 text-brand-500 hover:text-white hover:bg-brand-500 transition-all"
                disabled={loading}
                onClick={() => deleteCategory(id, onClose)}
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

            {watchSubCategoriesArray && watchSubCategoriesArray.length > 0 && (
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
                        errors.subCategories && errors.subCategories[idx]?.name
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
            <div className="w-full flex items-center justify-center gap-4">
              <button
                type="button"
                className="w-1/2 linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                onClick={() => {
                  const isAnySubCategoryEmpty = watchSubCategoriesArray.find(
                    (category) =>
                      category.name === "" || category.description === "",
                  );
                  if (isAnySubCategoryEmpty) {
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
                className="w-1/2 linear rounded-md bg-brand-500 text-white px-3 py-2 text-xs font-bold transition duration-200 uppercase active:bg-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
                disabled={loading}
              >
                Update category
              </button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Category;
