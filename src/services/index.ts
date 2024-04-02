import { AuthService } from "./auth.service";

export const authService = new AuthService(import.meta.env.VITE_DYNA_BASE_URL)
