import { getAuthorizationHeader } from "@/lib/utils";
import { ManufacturerFormSchema } from "@/types/form-schemas";
import axios, { AxiosInstance } from "axios";
import { z } from "zod";

export class ManufacturerService {
  protected instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Request timed out!",
    });
  }

  getManufacturers = async () => {
    return await this.instance.get("/", {
      headers: getAuthorizationHeader(),
    });
  };

  createManufacturer = async (data: z.infer<typeof ManufacturerFormSchema>) => {
    return await this.instance.post("/create", data, {
      headers: getAuthorizationHeader(),
    });
  };

  updateManufacturer = async (
    data: z.infer<typeof ManufacturerFormSchema>,
    id: string,
  ) => {
    return await this.instance.put("/update", data, {
      headers: getAuthorizationHeader(),
      params: { id },
    });
  };

  removeManufacturer = async (id: string) => {
    return await this.instance.delete("/delete", {
      params: {
        id,
      },
      headers: getAuthorizationHeader(),
    });
  };
}
