import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "src/layouts/rtl";
import AdminLayout from "src/layouts/admin";
import AuthLayout from "src/layouts/auth";
import Register from "./views/auth/Register";
import SignIn from "./views/auth/SignIn";
import ResetPassword from "./views/auth/ResetPassword";

const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="sign-in" element={<SignIn /> } />
        <Route path="reset-password" element={<ResetPassword /> } />
      </Route>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
