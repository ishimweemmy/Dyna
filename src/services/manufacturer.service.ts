import { getAuthorizationHeader } from "@/lib/utils";
import axios, { AxiosInstance } from "axios";

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
    return await this.instance.get("/get", {
      headers: getAuthorizationHeader(),
    });
  };

  createManufacturer = async (data: FormData) => {
    return await this.instance.post("/create", data, {
      headers: getAuthorizationHeader(),
    });
  };

  updateManufacturer = async (
    data: FormData,
    id: string,
  ) => {
    return await this.instance.put(`/update/${id}`, data, {
      headers: getAuthorizationHeader(),
    });
  };

  removeManufacturer = async (id: string) => {
    return await this.instance.delete(`/delete/${id}`, {
      headers: getAuthorizationHeader(),
    });
  };
}
