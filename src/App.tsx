import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "src/layouts/rtl";
import AdminLayout from "src/layouts/admin";
import AuthLayout from "src/layouts/auth";
import Register from "./views/auth/Register";
import SignIn from "./views/auth/SignIn";
import ResetPassword from "./views/auth/ResetPassword";
import EmailConfirm from "./views/auth/EmailConfirm";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="sign-in" element={<SignIn /> } />
          <Route path="reset-password" element={<ResetPassword /> } />
          <Route path="confirm-password" element={<EmailConfirm /> } />
        </Route>
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
