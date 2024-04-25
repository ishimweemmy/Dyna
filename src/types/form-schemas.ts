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

const RegisterFormSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "first name can't be too short" })
      .max(20, { message: "first name can't be too long" }),
    lastName: z
      .string()
      .min(3, { message: "last name can't be too short" })
      .max(20, { message: "first name can't be too long" }),
    email: z
      .string()
      .email({ message: "Invalid email, please input valid email" }),
    phoneNumber: z
      .string()
      .refine((value) => /^\+\d{1,3}\s?\d{3,14}$/.test(value), {
        message: "Invalid phone number",
      }),
    regKey: z.string().min(5, { message: "Invalid registration key format" }),
    password: passwordValidationSchema,
    confirmPassword: passwordValidationSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email, please input valid email" }),
  password: z.string().min(1, { message: "password can't be empty" }),
});

const ForgotPasswordFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email, please input valid email" }),
});

const ResetPasswordFormSchema = LoginFormSchema;

const VerifyEmailFormSchema = z.object({
  acticationCode: z.string().min(4).max(6),
  email: z
    .string()
    .email({ message: "Invalid email, please input valid email" }),
});

const CategoryFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "category name can't go below 3 characters" })
    .max(30, { message: "category name can't exceed 30 characters" }),
  description: z
    .string()
    .min(3, "category description can't go below 3 characters"),
  subCategories: z.array(
    z.object({
      name: z
        .string()
        .min(3, { message: "sub category name can't go below 3 characters" })
        .max(30, { message: "sub category name can't exceed 30 characters" }),
      description: z
        .string()
        .min(3, "sub category description can't go below 3 characters"),
    }),
  ),
});

const UpdateCategoryFormSchema = z.object({
  id: z.string().readonly(),
  name: z
    .string()
    .min(3, { message: "category name can't go below 3 characters" })
    .max(30, { message: "category name can't exceed 30 characters" }),
  description: z
    .string()
    .min(3, "category description can't go below 3 characters"),
  subCategories: z.array(
    z.object({
      id: z.string().readonly(),
      name: z
        .string()
        .min(3, { message: "sub category name can't go below 3 characters" })
        .max(30, { message: "sub category name can't exceed 30 characters" }),
      description: z
        .string()
        .min(3, "sub category description can't go below 3 characters"),
    }),
  ),
});

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB file
const ACCEPTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

const ManufacturerFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "manufacturer name can't go below 3 characters" })
    .max(30, { message: "manufacturer name can't exceed 30 characters" }),
  description: z
    .string()
    .min(3, "manufacturer description can't go below 3 characters"),
  logo: z
    .instanceof(File)
    .refine(
      (file) => {
        return !file || file.size <= MAX_UPLOAD_SIZE;
      },
      { message: "Image size should be less than 3MB" },
    )
    .refine(
      (file) => {
        return ACCEPTED_FORMATS.includes(file.type);
      },
      { message: "Invalid format, only jpeg, jpg and png images are allowed" },
    ).or(z.string()),
});

export {
  RegisterFormSchema,
  LoginFormSchema,
  ResetPasswordFormSchema,
  ForgotPasswordFormSchema,
  VerifyEmailFormSchema,
  CategoryFormSchema,
  UpdateCategoryFormSchema,
  ManufacturerFormSchema,
};
