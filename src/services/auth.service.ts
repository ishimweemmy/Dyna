import axios, { AxiosInstance } from 'axios'
import { LoginFormSchema, RegisterFormSchema, ResetPasswordFormSchema } from 'src/types/form-schemas';
import { z } from 'zod';

export class AuthService {
    protected instance: AxiosInstance;
    public constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: "Request timed out!"
        })
    }

    registerAdmin = async (data: Omit<z.infer<typeof RegisterFormSchema>, "confirmPassword">) => {
        const { firstName, lastName, email, password, phoneNumber, regKey: key } = data

        return await this.instance.post("/users/register-admin", {
            firstName, lastName, password, email, phoneNumber, key
        })
    }

    loginAdmin = async (data: z.infer<typeof LoginFormSchema>) => {
        console.log(data)
        return await this.instance.post("/auth/login", data)
    }

    resetAdminPassword = async (data: z.infer<typeof ResetPasswordFormSchema>) => {
        return await this.instance.post("/auth/reset-password", data)
    }
} 