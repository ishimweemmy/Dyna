import { AuthService } from "./auth.service";
import { CategoryService } from "./categories.service";

export const authService = new AuthService(import.meta.env.VITE_DYNA_BASE_URL);
export const categoryService = new CategoryService(
  import.meta.env.VITE_DYNA_BASE_URL + "category",
);
