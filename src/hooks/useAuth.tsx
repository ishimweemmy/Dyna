import { authService } from "src/services"
import { z } from "zod"
import { LoginFormSchema, RegisterFormSchema, ResetPasswordFormSchema } from 'src/types/form-schemas'
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import useLoading from "./useLoading"
import { setAuthorizationToken } from "src/lib/utils"

const useAuth = () => {
  const navigate = useNavigate()
  const {loading, withLoading} = useLoading()
  const location = useLocation()

  const registerUser = async(data: Omit<z.infer<typeof RegisterFormSchema>, "confirmPassword">) => {
    return withLoading(async() => {
      const response = await authService.registerAdmin(data)
      if(response.status === 201) {
        navigate("/auth/sign-in")
        toast.success("You have been successfully registered!! Redirecting you to login")
      }
    })
  }

  const loginUser = async(data: z.infer<typeof LoginFormSchema>) => {
    return withLoading(async() => {
      const response = await authService.loginAdmin(data)
      
      if(response.status == 200) {
        setAuthorizationToken(response.data?.data?.accessToken, "ACCESS")
        navigate(location.state?.path || "/admin", { replace: true })
        toast.success("Logged in successfully!!")
      }
    })
  }

  const resetUserPassword = async(data: z.infer<typeof ResetPasswordFormSchema>) => {
    return withLoading(async() => {
      const response = await authService.resetAdminPassword(data)

      if(response.status == 200) {
        toast.success("Password updated successfully!!")
        navigate("/auth/sign-in", {replace: true})
      }
    })
  }

  return { registerUser, loginUser, resetUserPassword, loading }
}

export default useAuth
