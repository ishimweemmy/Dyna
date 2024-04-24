import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useLoading from "./useLoading";
import { categoryService } from "@/services";
import { toast } from "react-toastify";
import { z } from "zod";
import { CategoryFormSchema } from "@/types/form-schemas";
import { addCategory, setCategories } from "@/features/category/categorySlice";

const useCategories = () => {
  const { loading, withLoading } = useLoading();
  const categories = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const getCategories = () => {
    withLoading(async () => {
      const response = await categoryService.getCategories();

      if (response.status == 200) {
        dispatch(setCategories(response.data.data));
      }
    });
  };

  const createCategory = (data: z.infer<typeof CategoryFormSchema>) => {
    withLoading(async () => {
      const response = await categoryService.createCategory(data);

      if (response.status == 201) {
        dispatch(addCategory(response.data.data));
        toast.success("successfully created a new category");
      }
    });
  };

  const updateCategory = (
    data: z.infer<typeof CategoryFormSchema>,
    id: string,
  ) => {
    withLoading(async () => {
      const response = await categoryService.updateCategory(data);

      if (response.status == 200) {
        toast.success("category updated successfully!");
        getCategories();
      }
    });
  };

  const deleteCategory = (id: string, onClose: () => void) => {
    withLoading(async () => {
      const response = await categoryService.removeCategory(id);

      if (response.status == 200) {
        toast.success("category deleted successfully!");
        getCategories();
        onClose();
      }
    });
  };

  return {
    categories,
    loading,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};

export default useCategories;
