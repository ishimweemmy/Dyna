import { getAuthorizationHeader } from "@/lib/utils";
import { CreateProductFormSchema } from "@/types/form-schemas";
import axios, { AxiosInstance } from "axios";
import { z } from "zod";

export class ProductService {
  protected instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Request timed out!",
    });
  }

  getProducts = async () => {
    return await this.instance.get("/all", {
      headers: getAuthorizationHeader(),
    });
  };

  createProduct = async (
    data: Omit<
      z.infer<typeof CreateProductFormSchema>,
      "illustrations"
    >,
  ) => {
    const {
      brand,
      company,
      crossedPrice,
      discount,
      instock,
      manufacturer,
      name,
      price,
      status,
      subCategories,
      warranty,
      categories
    } = data;
    return await this.instance.post(
      "/create",
      {
        brand,
        company,
        crossed_price: crossedPrice,
        discount,
        instock,
        manufacturer,
        name,
        price,
        status,
        category: categories,
        sub_category: subCategories,
        warranty,
      },
      {
        headers: getAuthorizationHeader(),
      },
    );
  };

  createProductIllustration = async (data: FormData, productId: string) => {
    return await this.instance.post(`/illustration/add/${productId}`, data, {
      headers: getAuthorizationHeader(),
    });
  };

  updateProduct = async (data: FormData, id: string) => {
    return await this.instance.put(`/update/${id}`, data, {
      headers: getAuthorizationHeader(),
    });
  };

  removeProduct = async (id: string) => {
    return await this.instance.delete(`/delete`, {
      params: {
        id
      },
      headers: getAuthorizationHeader(),
    });
  };
}
