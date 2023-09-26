import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "src/layouts/rtl";
import AdminLayout from "src/layouts/admin";
import AuthLayout from "src/layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
