import { Routes, Route, Navigate } from "react-router-dom";
import RtlLayout from "src/layouts/rtl";
import AdminLayout from "src/layouts/admin";
import AuthLayout from "src/layouts/auth";
import Register from "./views/auth/Register";
import SignIn from "./views/auth/SignIn";
import ResetPassword from "./views/auth/ResetPassword";
import EmailConfirm from "./views/auth/EmailConfirm";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import makeStore, { AppStore } from "./app/store";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./providers/ProtectedRoute";

const App = () => {
  const storeRef: any = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current.store}>
      <ToastContainer />
      <PersistGate
        loading={<div>Loading....</div>}
        persistor={storeRef.current.persistor}
      >
        <ChakraProvider>
          <Routes>
            <Route path="auth" element={<AuthLayout />}>
              <Route path="" element={<Navigate to="/auth/sign-in" />} />
              <Route path="register" element={<Register />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="confirm-password" element={<EmailConfirm />} />
            </Route>
            <Route
              path="admin/*"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            />
            <Route path="rtl/*" element={<RtlLayout />} />
            <Route path="/" element={<Navigate to="/admin" replace />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
