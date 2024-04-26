import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useLoading from "./useLoading";
import { manufacturerService } from "@/services";
import { toast } from "react-toastify";
import { setManufacturers } from "@/features/manufacturer/manufacturerSlice";

const useManufacturers = () => {
  const { loading, withLoading } = useLoading();
  const manufacturers = useAppSelector((state) => state.manufacturers);
  const dispatch = useAppDispatch();

  const getManufacturers = () => {
    withLoading(async () => {
      const response = await manufacturerService.getManufacturers();

      if (response.status == 200) {
        dispatch(setManufacturers(response.data.data));
      }
    });
  };

  const createManufacturer = (data: FormData) => {
    withLoading(async () => {
      const response = await manufacturerService.createManufacturer(data);

      if (response.status == 201) {
        toast.success("successfully created a new manufacturer");
        getManufacturers();
      }
    });
  };

  const updateManufacturer = (data: FormData, id: string) => {
    withLoading(async () => {
      const response = await manufacturerService.updateManufacturer(data, id);

      if (response.status == 200) {
        toast.success("manufacturer updated successfully!");
        getManufacturers();
      }
    });
  };

  const deleteManufacturer = (id: string, onClose: () => void) => {
    withLoading(async () => {
      const response = await manufacturerService.removeManufacturer(id);

      if (response.status == 200) {
        toast.success("manufacturer deleted successfully!");
        getManufacturers();
        onClose();
      }
    });
  };

  return {
    manufacturers,
    loading,
    getManufacturers,
    createManufacturer,
    updateManufacturer,
    deleteManufacturer,
  };
};

export default useManufacturers;
