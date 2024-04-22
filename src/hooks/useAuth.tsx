import { authService } from "src/services";
import { z } from "zod";
import {
  LoginFormSchema,
  RegisterFormSchema,
  ResetPasswordFormSchema,
} from "src/types/form-schemas";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLoading from "./useLoading";
import { setAuthorizationToken } from "src/lib/utils";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logoutUser, setUser } from "@/features/user/userSlice";

const useAuth = () => {
  const navigate = useNavigate();
  const { loading, withLoading } = useLoading();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const registerUser = async (
    data: Omit<z.infer<typeof RegisterFormSchema>, "confirmPassword">,
  ) => {
    withLoading(async () => {
      const response = await authService.registerAdmin(data);
      if (response.status === 201) {
        navigate("/auth/sign-in");
        toast.success(
          "You have been successfully registered!! Redirecting you to login",
        );
      }
    });
  };

  const loginUser = async (data: z.infer<typeof LoginFormSchema>) => {
    withLoading(async () => {
      const response = await authService.loginAdmin(data);

      const {
        data: { token, roles, user },
      } = response.data as {
        data: { token: string; roles: TRole[]; user: TUser };
      };

      if (response.status == 200) {
        const isAdmin = roles.find((role: TRole) => role.name === "ADMIN");
        if (isAdmin) {
          setAuthorizationToken(token, "ACCESS");
          setUser({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            id: user.id,
          });
          navigate(location.state?.path || "/admin", { replace: true });
          toast.success("Logged in successfully!!");
        } else {
          toast.error(
            "You are not allowed to access an admin page, contact the admin for support!! ",
          );
        }
      }
    });
  };

  const resetUserPassword = async (
    data: z.infer<typeof ResetPasswordFormSchema>,
  ) => {
    withLoading(async () => {
      const response = await authService.resetAdminPassword(data);

      if (response.status == 200) {
        toast.success("Password updated successfully!!");
        navigate("/auth/sign-in", { replace: true });
      }
    });
  };

  const logoutMUser = () => {
    withLoading(async () => {
      Cookies.remove("currentUser");
      dispatch(logoutUser(user));
      toast.success("logged out successfully!");
      navigate("/auth/sign-in");
    });
  };

  return { registerUser, loginUser, resetUserPassword, logoutMUser, loading };
};

export default useAuth;
