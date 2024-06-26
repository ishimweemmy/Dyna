import { getAuthorizationHeader } from "@/lib/utils";
import { CategoryFormSchema } from "@/types/form-schemas";
import axios, { AxiosInstance } from "axios";
import { z } from "zod";

export class CategoryService {
  protected instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Request timed out!",
    });
  }

  getCategories = async () => {
    return await this.instance.get("/", {
      headers: getAuthorizationHeader(),
    });
  };

  createCategory = async (data: z.infer<typeof CategoryFormSchema>) => {
    return await this.instance.post("/create", data, {
      headers: getAuthorizationHeader(),
    });
  };

  updateCategory = async (
    data: z.infer<typeof CategoryFormSchema>,
    id: string,
  ) => {
    return await this.instance.put(`/update/${id}`, data, {
      headers: getAuthorizationHeader(),
    });
  };

  removeCategory = async (id: string) => {
    return await this.instance.delete(`/delete/${id}`, {
      headers: getAuthorizationHeader(),
    });
  };
}
