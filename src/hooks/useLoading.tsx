import { useState } from "react";
import { toast } from "react-toastify";

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  async function withLoading<T>(fetchFunction: () => Promise<T>) {
    try {
      setLoading(true);
      const response = await fetchFunction();
      return response;
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        toast.error(data.message || data.error || "Unknown error occured!!", {
          position: "top-right",
        });
      } else {
        console.log(error.response);
        toast.error("Network error occured... Try again later!!");
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, withLoading };
};

export default useLoading;
