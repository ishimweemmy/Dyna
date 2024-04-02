import { z } from "zod";

const passwordValidationSchema = z
  .string()
  .refine((value) => /(?=.*?[A-Z])/.test(value), {
    message: "password must have atleast one upper case letter",
  })
  .refine((value) => /(?=.*?[a-z])/.test(value), {
    message: "password must have atleast one lower case letter",
  })
  .refine((value) => /(?=.*?[0-9])/.test(value), {
    message: "password must have atleast one digit",
  })
  .refine((value) => /(?=.*?[#?!@$%^&*-])/.test(value), {
    message: "password must have one special character",
  })
  .refine((value) => /.{8,}/.test(value), {
    message: "password should be greater or equal to 8 character",
  });

const RegisterFormSchema = z.object({
  firstName: z.string().min(3, { message: "first name can't be too short" }).max(20, { message: "first name can't be too long" }),
  lastName: z.string().min(3, { message: "last name can't be too short" }).max(20, { message: "first name can't be too long" }),
  email: z.string().email({ message: "Invalid email, please input valid email" }),
  phoneNumber: z.string().refine((value) => /^\+\d{1,3}\s?\d{3,14}$/.test(value), { message: "Invalid phone number", }),
  regKey: z.string().min(5, { message: "Invalid registration key format" }),
  password: passwordValidationSchema,
  confirmPassword: passwordValidationSchema
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const LoginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email, please input valid email" }),
  password: z.string().min(1, {message: "password can't be empty"})
})

const ForgotPasswordFormSchema = z.object({
  email: z.string().email({ message: "Invalid email, please input valid email" }),
})

const ResetPasswordFormSchema = LoginFormSchema

const VerifyEmailFormSchema = z.object({
  acticationCode: z.string().min(4).max(6),
  email: z.string().email({ message: "Invalid email, please input valid email" }),
})

export { RegisterFormSchema, LoginFormSchema, ResetPasswordFormSchema, ForgotPasswordFormSchema, VerifyEmailFormSchema }
