import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";
import { ManufacturerService } from "./manufacturer.service";
import { ProductService } from "./product.service";

export const authService = new AuthService(import.meta.env.VITE_DYNA_BASE_URL);
export const categoryService = new CategoryService(
  import.meta.env.VITE_DYNA_BASE_URL + "category",
);
export const manufacturerService = new ManufacturerService(
  import.meta.env.VITE_DYNA_BASE_URL + "manufacturers",
);
export const productService = new ProductService(
  import.meta.env.VITE_DYNA_BASE_URL + "product",
);
