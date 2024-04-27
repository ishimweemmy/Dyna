import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useLoading from "./useLoading";
import { productService } from "@/services";
import { toast } from "react-toastify";
import { setProducts } from "@/features/product/productSlice";
import { z } from "zod";
import { CreateProductFormSchema } from "@/types/form-schemas";
import { useState } from "react";

const useProducts = () => {
  const { loading, withLoading } = useLoading();
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [isSuccess, setIsSuccess] = useState(false);

  const getProducts = () => {
    withLoading(async () => {
      const response = await productService.getProducts();

      if (response.status == 200) {
        dispatch(setProducts(response.data.data));
      }
    });
  };

  const createProduct = (data: Omit<z.infer<typeof CreateProductFormSchema>, "illustrations" | "categories">) => {
    return withLoading(async () => {
      const response = await productService.createProduct(data);

      if (response.status == 200) {
        setIsSuccess(true);
        return response.data.data.id
      }
    });
  };

  const updateProduct = (data: FormData, id: string) => {
    withLoading(async () => {
      const response = await productService.updateProduct(data, id);

      if (response.status == 200) {
        toast.success("product updated successfully!");
        getProducts();
      }
    });
  };

  const deleteProduct = (id: string, onClose: () => void) => {
    withLoading(async () => {
      const response = await productService.removeProduct(id);

      if (response.status == 200) {
        toast.success("product deleted successfully!");
        getProducts();
        onClose();
      }
    });
  };

  const createIllustrations = (id: string, illustrations: FormData, onClose: () => void) => {
    withLoading(async() => {
      const response = await productService.createProductIllustration(illustrations, id)

      if(response.status == 200) {
        toast.success("successfully created a new product");
        getProducts()
        onClose()
      }
    })
  }

  return {
    products,
    loading,
    isSuccess,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    createIllustrations
  };
};

export default useProducts;
